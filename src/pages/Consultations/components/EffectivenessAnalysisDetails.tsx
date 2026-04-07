import { CustomAnalysisTooltip } from '@/pages/Consultations/components/CustomAnalysisTooltip';
import type {
  AnalysisData,
  AnalysisMeta,
  ChartPoint,
} from '@/pages/Consultations/components/types';
import { getAnalyticsChartFrames, getModelAnalytics } from '@/services/escola-lms/consultations';
import { ANALYSIS_COLORS, EMOTION_POOL, formatRating, getLabelColorByValue } from '@/utils/utils';
import { DownloadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Select, Space, Spin, Typography, message } from 'antd';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { FormattedMessage, useLocation, useParams } from 'umi';

const { Text } = Typography;

const PageWrapper = styled.div`
  padding: 0;
  min-height: 100vh;
`;

const StyledDownloadButton = styled(Button)`
  border-radius: 8px;
`;

const ExpiryText = styled(Text)`
  font-size: 13px;
  margin-left: 4px;
`;

const ExpiryTime = styled.b`
  color: ${ANALYSIS_COLORS.darkText};
`;

const StyledCard = styled(Card)`
  background: transparent;
  box-shadow: none;
  .ant-card-body {
    padding: 0;
  }
`;

const ControlsRow = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`;

const RatingValue = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${ANALYSIS_COLORS.green};
  padding: 4px 12px;
  border: 1px solid #b7eb8f;
  border-radius: 6px;
  background: #f6ffed;
`;

const RatingDescription = styled(Text)`
  max-width: 250px;
`;

const ResolutionPicker = styled(Space)`
  background: ${ANALYSIS_COLORS.white};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${ANALYSIS_COLORS.border};
`;

const ResolutionLabel = styled(Text)`
  font-size: 13px;
`;

const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: transparent;
  touch-action: pan-x;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e8e8e8;
    border-radius: 4px;
  }
`;

const ChartWrapper = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px 0;
`;

const ChartHeader = styled.div<{ $paddingLeft: number }>`
  margin-bottom: 16px;
  padding-left: ${(props) => props.$paddingLeft}px;
`;

const ChartContainer = styled.div<{ $height: number }>`
  height: ${(props) => props.$height}px;
  width: 100%;
  position: relative;
`;

const EmotionIconWrapper = styled.div`
  font-size: 26px;
  text-align: center;
`;

const SectionTitle = styled(Text)`
  font-size: 16px;
`;

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: ChartPoint;
}

const TIME_OPTIONS = [
  { value: 15, label: <FormattedMessage id="time.seconds" values={{ value: 15 }} /> },
  { value: 30, label: <FormattedMessage id="time.seconds" values={{ value: 30 }} /> },
  { value: 60, label: <FormattedMessage id="time.minutes" values={{ value: 1 }} /> },
  { value: 300, label: <FormattedMessage id="time.minutes" values={{ value: 5 }} /> },
];

const EffectivenessAnalysisDetails = () => {
  const { modelId, id: termId } = useParams<{ modelType: string; modelId: string; id: string }>();
  const { pathname } = useLocation();
  const [res, setRes] = useState<number>(15);
  const [loading, setLoading] = useState<boolean>(false);
  const [analysisMeta, setAnalysisMeta] = useState<AnalysisMeta | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const Y_AXIS_WIDTH = 45;

  const modelType = useMemo(() => {
    if (pathname.includes('/consultations/')) return 'consultation';
    if (pathname.includes('/webinars/')) return 'webinar';
    return '';
  }, [pathname]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <FormattedMessage id={modelType === 'webinar' ? 'menu.Courses' : 'other_activities'} />
        ),
      },
      {
        title: <FormattedMessage id={modelType === 'webinar' ? 'webinars' : 'consultations'} />,
        path: modelType === 'webinar' ? '/courses/webinars/list' : '/other/consultations',
      },
      {
        title: analysisMeta?.model_name || <FormattedMessage id="details" />,
      },
    ],
    [modelType, analysisMeta],
  );

  const colWidth = useMemo(() => (res <= 30 ? 85 : 150), [res]);

  useEffect(() => {
    const fetchMeta = async () => {
      if (!modelType || !modelId || !termId) return;
      try {
        const resMeta = await getModelAnalytics(modelType, modelId, termId);
        if (resMeta?.success) {
          setAnalysisMeta(resMeta.data);
        }
      } catch {
        message.error('Error fetching meta data');
      }
    };
    fetchMeta();
  }, [modelType, modelId, termId]);

  useEffect(() => {
    const fetchFrames = async () => {
      if (!analysisMeta?.id) return;
      setLoading(true);
      try {
        const resFrames = await getAnalyticsChartFrames(analysisMeta.id, { interval: res });
        if (resFrames?.success && resFrames.data) {
          const firstTs = new Date(resFrames.data[0].window_start).getTime();
          const formatted: ChartPoint[] = resFrames.data.map((item: AnalysisData) => {
            const currentTs = new Date(item.window_start).getTime();
            const second = Math.floor((currentTs - firstTs) / 1000);
            return {
              ...item,
              second,
              interval: res,
              time: `${Math.floor(second / 60)}:${(second % 60).toString().padStart(2, '0')}`,
              attention: Math.round(parseFloat(item.attention) * 100) || 0,
              max_emotion_percentage_val:
                Math.round(parseFloat(item.max_emotion_percentage) * 100) || 0,
              emotionKey: item.max_emotion || 'neutral',
            };
          });
          setChartData(formatted);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchFrames();
  }, [analysisMeta?.id, res]);

  const chartWidth = useMemo(() => {
    const calculatedWidth = chartData.length * colWidth;
    return chartData.length > 5 ? `${calculatedWidth}px` : '100%';
  }, [chartData.length, colWidth]);

  const renderDynamicGradient = useCallback(
    (gradientId: string, isArea: boolean) => {
      if (chartData.length === 0) return null;
      return (
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          {chartData.map((point, index) => (
            <stop
              key={`${gradientId}-${point.time}`}
              offset={`${(index / (chartData.length - 1)) * 100}%`}
              stopColor={getLabelColorByValue(point.attention)}
              stopOpacity={isArea ? 0.4 : 1}
            />
          ))}
        </linearGradient>
      );
    },
    [chartData],
  );

  const renderEmotionDot = useCallback((props: DotProps) => {
    const { cx, payload } = props;
    if (cx === undefined || !payload) return <Fragment />;
    const emotion = EMOTION_POOL.find((e) => e.key === payload.emotionKey) || EMOTION_POOL[6];
    return (
      <foreignObject key={`${cx}-${payload.time}`} x={cx - 15} y={30} width={30} height={40}>
        <EmotionIconWrapper title={payload.emotionKey}>{emotion.icon}</EmotionIconWrapper>
      </foreignObject>
    );
  }, []);

  const formatExpirationTime = useCallback((ms: number | null) => {
    if (!ms || ms <= 0) return '0s';
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num: number) => num.toString().padStart(2, '0');
    return hours > 0
      ? `${hours}h ${pad(minutes)}m ${pad(seconds)}s`
      : `${minutes}m ${pad(seconds)}s`;
  }, []);

  return (
    <PageContainer
      header={{
        breadcrumb: { items: breadcrumbItems },
        title: analysisMeta?.model_name,
        extra: [
          analysisMeta?.url && (
            <Space key="download-section" size="middle">
              <StyledDownloadButton
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                onClick={() => analysisMeta?.url && window.open(analysisMeta?.url, '_blank')}
              >
                <FormattedMessage id="download_recording" />
              </StyledDownloadButton>
              {analysisMeta.url_expiration_time_millis && (
                <ExpiryText type="secondary">
                  <FormattedMessage
                    id="recording_available_until"
                    values={{
                      time: (
                        <ExpiryTime>
                          {formatExpirationTime(analysisMeta.url_expiration_time_millis)}
                        </ExpiryTime>
                      ),
                    }}
                  />
                </ExpiryText>
              )}
            </Space>
          ),
        ],
      }}
    >
      <PageWrapper>
        <StyledCard bordered={false}>
          <ControlsRow span={24}>
            <Space direction="vertical" size={8}>
              <SectionTitle strong>
                <FormattedMessage id="engagement_rating" />
              </SectionTitle>
              <Space size="large">
                <RatingValue>{formatRating(analysisMeta?.rating || 0)}</RatingValue>
                <RatingDescription type="secondary">
                  <FormattedMessage id="ai_analysis_average" />
                </RatingDescription>
              </Space>
            </Space>
            <ResolutionPicker align="center">
              <ResolutionLabel>
                <FormattedMessage id="resolution" />:
              </ResolutionLabel>
              <Select value={res} onChange={setRes} style={{ width: 100 }} variant="borderless">
                {TIME_OPTIONS.map((opt) => (
                  <Select.Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Option>
                ))}
              </Select>
            </ResolutionPicker>
          </ControlsRow>

          <Col span={24}>
            <Spin spinning={loading}>
              <ScrollContainer>
                <ChartWrapper $width={chartWidth}>
                  <ChartHeader $paddingLeft={Y_AXIS_WIDTH}>
                    <SectionTitle strong>
                      <FormattedMessage id="listeners_engagement" />
                    </SectionTitle>
                  </ChartHeader>
                  <ChartContainer $height={380}>
                    <ResponsiveContainer>
                      <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <defs>
                          {renderDynamicGradient('dynamicFill', true)}
                          {renderDynamicGradient('dynamicStroke', false)}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="time"
                          axisLine={{ stroke: ANALYSIS_COLORS.border }}
                          tick={{ fontSize: 12 }}
                          dy={10}
                          interval={res >= 300 ? 0 : 'preserveStartEnd'}
                        />
                        <YAxis
                          width={Y_AXIS_WIDTH}
                          domain={[0, 100]}
                          ticks={[0, 50, 100]}
                          tickFormatter={(v: number) => `${v}%`}
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                        />
                        <RechartsTooltip
                          content={<CustomAnalysisTooltip />}
                          cursor={{ stroke: '#40a9ff', strokeWidth: 1.5 }}
                        />
                        <Area
                          type="monotone"
                          dataKey="attention"
                          stroke="url(#dynamicStroke)"
                          strokeWidth={3}
                          fill="url(#dynamicFill)"
                          isAnimationActive={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>

                  <ChartHeader $paddingLeft={Y_AXIS_WIDTH} style={{ marginTop: 60 }}>
                    <SectionTitle strong>
                      <FormattedMessage id="detected_emotions" />
                    </SectionTitle>
                  </ChartHeader>
                  <ChartContainer $height={250}>
                    <ResponsiveContainer>
                      <AreaChart
                        data={chartData}
                        margin={{ top: 0, right: 30, left: 0, bottom: 100 }}
                      >
                        <XAxis
                          dataKey="time"
                          axisLine={{ stroke: ANALYSIS_COLORS.border }}
                          tickLine={false}
                          tick={{ fontSize: 12 }}
                          dy={10}
                          interval={res >= 300 ? 0 : 'preserveStartEnd'}
                        />
                        <YAxis
                          width={Y_AXIS_WIDTH}
                          axisLine={false}
                          tick={false}
                          tickLine={false}
                          domain={[0, 100]}
                        />
                        <RechartsTooltip content={<CustomAnalysisTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="max_emotion_percentage_val"
                          stroke="none"
                          fill="none"
                          isAnimationActive={false}
                          dot={renderEmotionDot}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </ChartWrapper>
              </ScrollContainer>
            </Spin>
          </Col>
        </StyledCard>
      </PageWrapper>
    </PageContainer>
  );
};

export default EffectivenessAnalysisDetails;
