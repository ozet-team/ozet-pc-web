import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ResumeWapper = styled.div`
  background: #f0f2f5;
`;
export const ProfileWrapper = styled.div`
  background: #f0f2f5;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 0;
  position: fixed;
`;
export const ProfileImage = styled(motion.img)`
  height: 180px;
  width: 180px;
  position: absolute;
`;
export const PcProfileImage = styled(motion.img)`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    height: 170px;
    width: 170px;
    margin-left: 18px;
  }
`;
export const PcHeaderWrapper = styled(motion.div)``;
export const ProfileImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  height: 180px;
  margin-bottom: 60px;
  @media (min-width: 500px) {
    display: none;
  }
`;
export const ProfileHeaderInner = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 500px) {
    margin-top: 50px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
export const ProfileHeaderWrapper = styled.div`
  @media (min-width: 500px) {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    min-width: 320px;
    flex: 1;
  }
`;
export const PcTableWrapper = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    margin-top: 28px;
    flex-direction: row;
  }
`;
export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileTextWrapper = styled(motion.div)`
  @media (min-width: 500px) {
    display: none;
  }
`;
export const StyledTable = styled(motion.div)`
  margin-bottom: 30px;
  @media (min-width: 500px) {
    margin-bottom: 50px;
  }
`;
export const ProfileCategory = styled.td`
  min-width: 50px;
  font-size: 13px;
  font-weight: 700;
  padding-bottom: 8px;
  color: #666666;
  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
export const ProfileText = styled.td`
  font-size: 13px;
  padding-left: 12px;
  padding-bottom: 9px;
  width: 260px;
  @media (min-width: 500px) {
    font-size: 16px;
    width: 305px;
    margin-right: 60px;
  }
`;
export const ProfileTableRow = styled.tr`
  display: flex;
  flex-direction: row;
`;

export const ProfileNickname = styled.div`
  font-size: 14px;
  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
export const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 4px;
  @media (min-width: 500px) {
    font-size: 28px;
  }
`;
export const ProfileIntroduce = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
  font-size: 16px;
`;
export const ResumeDetailWrapper = styled(motion.div)`
  background-color: white;
  z-index: 99;
  border-width: 0px;
  border-radius: 16px;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 270px;
  @media (min-width: 500px) {
    border-radius: 0px;
  }
`;

export const ResumeModalWrapper = styled.div`
  display: block;
  border-style: solid;
  border-width: 0px;
  border-radius: 16px;
  position: relative;
`;
export const ResumeModalInner = styled.div`
  overflow: initial;
`;
export const ProfileWorkRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
export const ResumeColumnBar = styled.div`
  width: 1px;
  height: 11px;
  margin: 0 6px;
  background: black;
`;

export const ResumeCategoryBarWrapper = styled.div`
  padding: 0px 10px;
  @media (min-width: 500px) {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    min-width: 320px;
    flex: 1;
  }
`;
export const ResumeInnerWrapper = styled.div`
  width: calc(100vw - 40px);
  @media (min-width: 500px) {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    min-width: 320px;
    flex: 1;
  }
`;
export const ResumeDetailInner = styled.div`
  position: relative;
  padding: 0px 20px;
  font-family: 'Apple SD Gothic Neo', sans-serif;
  overflow-y: scroll;
  width: 100vw;
  height: calc(100vh - 150px);
  padding-top: 27px;
  @media (min-width: 500px) {
    height: calc(100vh - 340px);
    padding: 0px;
  }
`;
export const ResumeSubTitle = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (min-width: 500px) {
    font-size: 24px;
  }
`;
export const ResumeInstagramLogo = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  border-radius: 6px;
`;
export const ResumeDetailTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 500px) {
    font-size: 18px;
  }
`;
export const ResumeSnsLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-bottom: 9px;
`;
export const ResumeImageWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media (min-width: 500px) {
    width: 320px;
  }
`;
export const ImageListWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ResumeSnsImage = styled.img`
  border-radius: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ResumeDetailText = styled.div`
  font-size: 13px;
  font-weight: 400;

  @media (min-width: 500px) {
    font-size: 14px;
  }
`;
export const ResumeTerm = styled.div`
  font-size: 13px;
  color: #828282;
  @media (min-width: 500px) {
    font-size: 14px;
  }
`;
export const ResumeBr = styled.div`
  height: 1px;
  background: black;
  opacity: 10%;
  margin-top: 8px;
  margin-bottom: 10px;
  @media (min-width: 500px) {
    margin-top: 12px;
    margin-bottom: 16px;
  }
`;
export const ResumeLargeMargin = styled.div`
  height: 24px;
`;
export const ResumeMargin = styled.div`
  height: 12px;
  @media (min-width: 500px) {
    height: 20px;
  }
`;
export const ResumeSmallMargin = styled.div`
  height: 2px;
  @media (min-width: 500px) {
    height: 3px;
  }
`;
