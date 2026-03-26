import {ANALYSIS_COLORS, EMOTION_POOL, getLabelColorByValue} from "@/utils/utils";
import {FormattedMessage} from "@@/exports";
import styled from "styled-components";

const CustomTooltipWrapper = styled.div`
  background: white;
  border: 1px solid ${ANALYSIS_COLORS.border};
  padding: 16px;
  border-radius: 10px;
  width: 260px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  .tooltip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  .percentage-badge {
    padding: 2px 10px;
    font-weight: 700;
    border-radius: 4px;
  }
  .preview-img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    background: #262626;
    border-radius: 6px;
  }
`;
export const CustomAnalysisTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  const emotion = EMOTION_POOL.find((e) => e.key === data.emotionKey) || EMOTION_POOL[6];
  const valColor = getLabelColorByValue(data.attention);

  {/* TODO: Connect data with backend */}
  return (
    <CustomTooltipWrapper>
      <div className="tooltip-header">
        <span style={{ fontSize: 16, fontWeight: 600 }}>
          {emotion.icon} <FormattedMessage id={emotion.labelId} />
        </span>
        <span
          className="percentage-badge"
          style={{
            color: valColor,
            background: `${valColor}15`,
            border: `1px solid ${valColor}40`,
          }}
        >
          {data.attention}%
        </span>
      </div>
      <div style={{ fontSize: 12, color: ANALYSIS_COLORS.textSecondary, marginBottom: 4 }}>
        <FormattedMessage id="time" />: {data.time}
      </div>
      <div style={{ fontSize: 13, color: ANALYSIS_COLORS.darkText, marginBottom: 12 }}>
        <FormattedMessage id="ai_segment_analysis" />
      </div>
      <img
        className="preview-img"
        src="https://via.placeholder.com/240x120/1a1a1a/ffffff?text=Video+Frame"
        alt="preview"
      />
    </CustomTooltipWrapper>
  );
};
