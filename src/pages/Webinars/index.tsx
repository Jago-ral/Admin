import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import React, { useCallback, useRef, useState } from 'react';
import { FormattedMessage, Link, history, useIntl, useParams } from 'umi';

import { useShowNotification } from '@/hooks/useMessage';
import { deleteWebinar, generateYoutubeToken, webinars } from '@/services/escola-lms/webinars';
import { roundTo } from '@/utils/utils';
import {
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  FireOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm, Tag, Typography, message } from 'antd';
import EffectivenessAnalysis from '../Consultations/components/EffectivenessAnalysis';
import TokenForm from './components/TokenForm';

export const TableColumns: ProColumns<API.Webinar>[] = [
  {
    title: <FormattedMessage id="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="name" />,
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: <FormattedMessage id="status" />,
    dataIndex: 'status',
    valueEnum: {
      draft: {
        text: (
          <Tag>
            <FormattedMessage id="draft" />
          </Tag>
        ),
      },
      archived: {
        text: (
          <Tag color="error">
            <FormattedMessage id="archived" />
          </Tag>
        ),
      },
      published: {
        text: (
          <Tag color="success">
            <FormattedMessage id="published" />
          </Tag>
        ),
      },
    },
  },
  {
    title: <FormattedMessage id="product" />,
    dataIndex: 'product',
    render: (_, record) =>
      record.product?.price ? (
        <Link to={`/courses/webinars/webinar/${record.id}/product`}>
          <Button type="primary" icon={<DollarOutlined />}>
            {roundTo(record.product.price, 2, 100)}
          </Button>
        </Link>
      ) : (
        <Typography>
          <FireOutlined /> <FormattedMessage id="no_pricing" />
        </Typography>
      ),
  },
];

const Webinars: React.FC = () => {
  const [generateToken, setGenarateToken] = useState(false);
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const { showNotification } = useShowNotification();
  const { tab } = useParams<{ tab?: string }>();
  const activeTab = tab || 'list';

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      try {
        const response = await deleteWebinar(id);
        if (response.success) showNotification(response);
        actionRef.current?.reload();
      } catch (error) {
        message.error(<FormattedMessage id="error" />);
      } finally {
        setLoading(false);
      }
    },
    [showNotification],
  );

  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: activeTab,
          onChange: (key) => {
            history.push(`/courses/webinars/${key}`);
          },
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />}>
          <ProTable<API.Webinar, API.WebinarsParams>
            headerTitle={intl.formatMessage({ id: 'menu.Courses.Webinars' })}
            loading={loading}
            actionRef={actionRef}
            rowKey="id"
            search={{ layout: 'vertical' }}
            toolBarRender={() => [
              <Link key="addnew" to="/courses/webinars/webinar/new">
                <Button type="primary">
                  <PlusOutlined /> <FormattedMessage id="new" />
                </Button>
              </Link>,
            ]}
            request={(params, sort) => {
              const sortArr = sort ? Object.entries(sort)[0] : null;
              return webinars({
                name: params.name,
                per_page: params.pageSize,
                page: params.current,
                status: params.status,
                order_by: sortArr?.[0],
                order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
              }).then((response) => {
                const res = response as API.DefaultMetaResponse<API.Webinar>;

                if (res && 'success' in response && response.success) {
                  return {
                    data: response.data,
                    total: response.meta.total,
                    success: true,
                  };
                }

                return {
                  data: [],
                  total: 0,
                  success: false,
                };
              });
            }}
            columns={[
              ...TableColumns,
              {
                title: <FormattedMessage id="options" />,
                valueType: 'option',
                width: '10%',
                render: (_, record) => [
                  <Link key="edit" to={`/courses/webinars/webinar/${record.id}`}>
                    <Button type="primary" icon={<EditOutlined />} />
                  </Link>,
                  <Popconfirm
                    key="delete"
                    title={<FormattedMessage id="deleteQuestion" />}
                    onConfirm={() => record.id && handleRemove(record.id)}
                  >
                    <Button type="primary" icon={<DeleteOutlined />} danger />
                  </Popconfirm>,
                ],
              },
            ]}
          />
        </ProCard.TabPane>

        <ProCard.TabPane
          key="effectiveness-analysis"
          tab={<FormattedMessage id="effectiveness_analysis" />}
        >
          <EffectivenessAnalysis modelType="webinar" />
        </ProCard.TabPane>
      </ProCard>

      <TokenForm
        visible={generateToken}
        onVisibleChange={(value) => {
          return value === false && setGenarateToken(false);
        }}
        onFinish={async (value) => {
          try {
            const request = await generateYoutubeToken({ email: value.email });
            if (request.url) {
              window.open(request.url, '_blank');
              setGenarateToken(false);
            }
          } catch (error) {
            console.error(error);
          }
        }}
      />
    </PageContainer>
  );
};

export default Webinars;
