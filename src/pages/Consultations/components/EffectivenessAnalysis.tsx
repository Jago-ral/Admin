import CategoryTree from '@/components/CategoryTree';
import { DATETIME_FORMAT } from '@/consts/dates';
import { consultations } from '@/services/escola-lms/consultations';
import { createTableOrderObject, EMOTION_POOL, getLabelColorByValue } from '@/utils/utils';
import { Link } from '@@/exports';
import {
  DownloadOutlined,
  PlusOutlined,
  ReloadOutlined,
  SettingOutlined,
  VerticalAlignMiddleOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Tag, Tooltip } from 'antd';
import { format } from 'date-fns';
import React, { Fragment, useRef, useState } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'umi';

const StyledProTable = styled(ProTable)`
  .ant-table-thead > tr > th::before {
    display: none;
  }
` as typeof ProTable;

const StyledValueTag = styled(Tag)<{ $color: string }>`
  color: ${(props) => props.$color};
  background-color: ${(props) => `${props.$color}33`};
  border: 1px solid ${(props) => props.$color};
  border-radius: 4px;
  font-weight: bold;
`;

const AttentionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  justify-content: center;
`;

const EmojiHeader = styled.span`
  font-size: 18px;
`;

const TableLink = styled(Link)`
  color: #000;
`;

const ActionIcon = styled(({ component: Component, ...props }) => <Component {...props} />)`
  font-size: 16px;
  color: #8c8c8c;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

const ValueTag = ({ value, suffix = '' }: { value: any; suffix?: string }) => {
  const num = parseFloat(value);
  const color = getLabelColorByValue(num);
  return (
    <StyledValueTag $color={color}>
      {value}
      {suffix}
    </StyledValueTag>
  );
};

const createEmotionColumn = (emoji: string, dataKey: string): ProColumns<API.Consultation> => ({
  title: <EmojiHeader>{emoji}</EmojiHeader>,
  dataIndex: ['emotions', dataKey],
  hideInSearch: true,
  align: 'center',
  width: 30,
  render: (val) => `${val || 0}`,
});

export const EffectivenessAnalysis: React.FC<{
  class_type: string;
}> = () => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);

  const columns: ProColumns<API.Consultation>[] = [
    {
      title: <FormattedMessage id="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: 40,
      render: (dom, record) => (
        <TableLink to={`/other/consultations/effectiveness-analysis/${record.id}`}>{dom}</TableLink>
      ),
    },
    {
      title: <FormattedMessage id="name" />,
      dataIndex: 'name',
      sorter: true,
      width: 250,
      render: (dom, record) => (
        <TableLink to={`/other/consultations/effectiveness-analysis/${record.id}`}>{dom}</TableLink>
      ),
    },
    {
      title: <FormattedMessage id="dateRange" />,
      dataIndex: 'dateRange',
      hideInTable: true,
      valueType: 'dateRange',
    },
    {
      title: <FormattedMessage id="categories" />,
      dataIndex: 'category_id',
      hideInTable: true,
      renderFormItem: ({ type, ...rest }) => <CategoryTree {...rest} />,
    },
    {
      title: <FormattedMessage id="averange_attention" />,
      dataIndex: 'averange_attention',
      hideInSearch: true,
      width: 50,
      render: (_, record) => (
        <AttentionWrapper>
          <ValueTag value={record.average_attention || '87'} suffix="%" />
        </AttentionWrapper>
      ),
    },
    {
      title: <FormattedMessage id="emotions" />,
      dataIndex: 'emotions_label',
      hideInSearch: true,
      width: 5,
      render: () => null,
    },
    ...EMOTION_POOL.map((e) => createEmotionColumn(e.icon, e.key)),
    {
      title: <FormattedMessage id="rating" />,
      dataIndex: 'rating',
      hideInSearch: true,
      width: 60,
      render: (_, record) => <ValueTag value={record.rating || '6.75'} />,
    },
    {
      title: <FormattedMessage id="recording_short" />,
      dataIndex: 'recording_short',
      hideInSearch: true,
      width: 60,
      render: (_, record) => (
        <Tooltip
          title={
            <FormattedMessage
              id="download_video_btn_tooltip"
              values={{
                duration: record.duration ? `${record.duration}` : '',
              }}
            />
          }
        >
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="middle"
            style={{ borderRadius: '4px' }}
          />
        </Tooltip>
      ),
    },
  ];


  //TODO: Connect with backend, add correct types
  return (
      <StyledProTable<API.Consultation, API.ConsultationsParams>
        actionRef={actionRef}
        rowKey="id"
        loading={loading}
        search={{ layout: 'horizontal', labelWidth: 'auto' }}
        columnEmptyText="0%"
        toolBarRender={() => [
          <Button key="add" type="primary" icon={<PlusOutlined />} style={{ borderRadius: '6px' }}>
            <FormattedMessage id="new" />
          </Button>,
          <ActionIcon
            key="reload"
            component={ReloadOutlined}
            onClick={() => actionRef.current?.reload()}
          />,
          <ActionIcon key="sort" component={VerticalAlignMiddleOutlined} />,
          <ActionIcon key="settings" component={SettingOutlined} />,
        ]}
        request={async ({ name, dateRange, category_id, pageSize, current }, sort) => {
          setLoading(true);
          const date_from = dateRange?.[0]
            ? format(new Date(dateRange[0]), DATETIME_FORMAT)
            : undefined;
          const date_to = dateRange?.[1]
            ? format(new Date(dateRange[1]), DATETIME_FORMAT)
            : undefined;

          const response = await consultations({
            name,
            'categories[]': category_id,
            per_page: pageSize,
            page: current,
            date_from,
            date_to,
            ...createTableOrderObject(sort, 'created_at'),
          });
          setLoading(false);
          return {
            data: response.data,
            total: response.meta.total,
            success: response.success,
          };
        }}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
  );
};

export default EffectivenessAnalysis;
