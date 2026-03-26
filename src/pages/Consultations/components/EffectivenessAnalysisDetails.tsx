import { DownloadOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Select, Space, Typography } from 'antd';
import {Fragment, useMemo, useState} from 'react';
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
import {FormattedMessage} from 'umi';
import {ANALYSIS_COLORS, EMOTION_POOL, getLabelColorByValue} from "@/utils/utils";
import {CustomAnalysisTooltip} from "@/pages/Consultations/components/CustomAnalysisTooltip";
const { Title, Text } = Typography;


const PageWrapper = styled.div`
  padding: 24px;
  background: ${ANALYSIS_COLORS.bgLight};
  min-height: 100vh;
  border-radius: 8px;
`;

const HeaderWrapper = styled.div`
  padding: 16px 24px 0;
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  margin-bottom: 20px;
`;

const TitleSection = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
  align-items: center;
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

const EmotionGridLine = styled.div<{ $left: number }>`
  position: absolute;
  top: 55px;
  left: ${(props) => props.$left}px;
  right: 30px;
  height: 1px;
  background: ${ANALYSIS_COLORS.border};
  z-index: 0;
`;

const EmotionIconWrapper = styled.div`
  font-size: 26px;
  text-align: center;
`;
export const EffectivenessAnalysisDetails = () => {
  const [res, setRes] = useState(15);
  const Y_AXIS_WIDTH = 45;
  const TOTAL_DURATION_SEC = 1800;
  const timeOptions = [
    { value: 15, label: <FormattedMessage id="time.seconds" values={{ value: 15 }} /> },
    { value: 30, label: <FormattedMessage id="time.seconds" values={{ value: 30 }} /> },
    { value: 60, label: <FormattedMessage id="time.minutes" values={{ value: 1 }} /> },
    { value: 300, label: <FormattedMessage id="time.minutes" values={{ value: 5 }} /> },
  ];

  const data = useMemo(() => {
    const pointsCount = Math.floor(TOTAL_DURATION_SEC / res);
    const getAttention = (s: number) =>
      [92, 85, 78, 45, 30, 25, 40, 65, 88, 95][Math.floor(s / 15) % 10];

    return Array.from({ length: pointsCount + 1 }, (_, i) => {
      const sec = i * res;
      return {
        time: `${Math.floor(sec / 60)}:${(sec % 60).toString().padStart(2, '0')}`,
        attention: getAttention(sec),
        emotionKey: EMOTION_POOL[Math.floor(sec / 15) % EMOTION_POOL.length].key,
      };
    });
  }, [res]);

  const chartWidth = useMemo(() => {
    if (res >= 300) return '100%';
    const baseWidth = res <= 30 ? 85 : 150;
    return `${data.length * baseWidth}px`;
  }, [data.length, res]);

  const renderDynamicGradient = (gradientId: string, isArea: boolean) => (
    <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
      {data.map((point, index) => (
        <stop
          key={point.time}
          offset={`${(index / (data.length - 1)) * 100}%`}
          stopColor={getLabelColorByValue(point.attention)}
          stopOpacity={isArea ? 0.4 : 1}
        />
      ))}
    </linearGradient>
  );

  return (
    <Fragment>
      <HeaderWrapper>
        <StyledBreadcrumb>
          <Breadcrumb.Item>
            <FormattedMessage id="other_activities" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <FormattedMessage id="consultations" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <FormattedMessage id="detailed_analysis" />
          </Breadcrumb.Item>
        </StyledBreadcrumb>
      </HeaderWrapper>

      <PageWrapper style={{boxShadow: "none"}}>
        <TitleSection>
          <Title level={3} style={{ margin: 0 }}>
            Konsultacja Testowa
          </Title>
          <Space size="middle">
            <StyledDownloadButton type="primary" icon={<DownloadOutlined />} size="large">
              <FormattedMessage id="download_recording" />
            </StyledDownloadButton>
            <ExpiryText type="secondary">
              <FormattedMessage
                id="recording_available_until"
                values={{ time: <ExpiryTime>9h 35m</ExpiryTime> }}
              />
              . <FormattedMessage id="recording_will_be_deleted" />
            </ExpiryText>
          </Space>
        </TitleSection>

        <StyledCard style={{boxShadow: "none"}} bordered={false}>
          <ControlsRow span={24}>
            <Space direction="vertical" size={8}>
              <Text strong style={{ fontSize: 16 }}>
                <FormattedMessage id="engagement_rating" />
              </Text>
              <Space size="large">
                <RatingValue>6.75</RatingValue>
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
                {timeOptions.map(opt => (
                  <Select.Option key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Option>
                ))}
              </Select>
            </ResolutionPicker>
          </ControlsRow>

          <Col span={24}>
            <ScrollContainer>
              <ChartWrapper $width={chartWidth}>
                <ChartHeader $paddingLeft={Y_AXIS_WIDTH}>
                  <Text strong style={{ fontSize: 16 }}>
                    <FormattedMessage id="listeners_engagement" />
                  </Text>
                </ChartHeader>
                <ChartContainer $height={380}>
                  <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                      <defs>
                        {renderDynamicGradient('dynamicFill', true)}
                        {renderDynamicGradient('dynamicStroke', false)}
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="time"
                        axisLine={{ stroke: ANALYSIS_COLORS.border }}
                        tick={{ fontSize: 12, fill: ANALYSIS_COLORS.textSecondary }}
                        dy={10}
                        interval={res >= 300 ? 0 : 'preserveStartEnd'}
                      />
                      <YAxis
                        width={Y_AXIS_WIDTH}
                        domain={[0, 100]}
                        ticks={[0, 50, 100]}
                        tickFormatter={(v) => `${v}%`}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: ANALYSIS_COLORS.textSecondary }}
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
                  <Text strong style={{ fontSize: 16 }}>
                    <FormattedMessage id="detected_emotions" />
                  </Text>
                </ChartHeader>
                <ChartContainer $height={250}>
                  <EmotionGridLine $left={Y_AXIS_WIDTH} />
                  <ResponsiveContainer>
                    <AreaChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 100 }}>
                      <XAxis
                        dataKey="time"
                        axisLine={{ stroke: ANALYSIS_COLORS.border }}
                        tickLine={true}
                        tick={{ fontSize: 12, fill: ANALYSIS_COLORS.textSecondary }}
                        dy={10}
                        interval={res >= 300 ? 0 : 'preserveStartEnd'}
                      />
                      <YAxis width={Y_AXIS_WIDTH} axisLine={false} tick={false} tickLine={false} />
                      <RechartsTooltip content={<CustomAnalysisTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="attention"
                        stroke="none"
                        fill="none"
                        isAnimationActive={false}
                        dot={(props) => {
                          const { cx, payload } = props;
                          const emotion =
                            EMOTION_POOL.find((e) => e.key === payload.emotionKey) ||
                            EMOTION_POOL[6];
                          return (
                            <>
                            {cx && <foreignObject key={cx} x={cx - 15} y={30} width={30} height={40}>
                              <EmotionIconWrapper>{emotion.icon}</EmotionIconWrapper>
                            </foreignObject>}
                            </>
                          );
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </ChartWrapper>
            </ScrollContainer>
          </Col>
        </StyledCard>
      </PageWrapper>
    </Fragment>
  );
};

export default EffectivenessAnalysisDetails;
