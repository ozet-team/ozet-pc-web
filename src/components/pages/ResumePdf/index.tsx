import React, { useRef } from 'react';
import {
  PdfCareerInner,
  PdfCareerRowLeft,
  PdfCareerRowRight,
  PdfCareerWrapper,
  PdfCategory,
  PdfCompany,
  PdfDetailElement,
  PdfDuration,
  PdfHr,
  PdfInner,
  PdfLeftDetail,
  PdfName,
  PdfNickname,
  PdfPosition,
  PdfProfileImage,
  PdfProfileInner,
  PdfProfileText,
  PdfProfileWrapper,
  PdfResume,
  PdfWorkedOn,
  PdfWrapper,
} from './styled';
import { resumeData, userInfoData } from '../../../api/ResumeData';
import CareerTable from '../../common/CareerTable';
import {
  convertBirth,
  convertPhoneNumber,
  convertPosition,
  locationConvert,
} from '../../../utils/hooks/convert';
import { changeDateYM } from '../../../utils/hooks/calculateDuration';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ResumePdf = () => {
  const resume = useRef<HTMLDivElement>(null);
  const getPdf = async () => {
    const element = resume.current;
    const canvas = await html2canvas(element as HTMLDivElement);

    const doc = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 180;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL('image/png');
    console.log(doc);
    console.log(imgData);
    doc.addImage(imgData, 'PNG', 15, 25, imgWidth, imgHeight);
    doc.save('resume.pdf');
  };
  return (
    <PdfWrapper>
      <button
        onClick={() => {
          getPdf();
        }}
      />
      <PdfInner ref={resume}>
        <PdfProfileWrapper>
          <PdfProfileInner>
            <PdfResume>RESUME</PdfResume>
            <PdfNickname>닉네임</PdfNickname>
            <PdfName>{userInfoData.name}</PdfName>
            <PdfProfileText>
              <PdfLeftDetail>
                <CareerTable career={userInfoData.career} />
                <PdfDetailElement>
                  {convertPhoneNumber(userInfoData.phoneNumber)}
                </PdfDetailElement>
              </PdfLeftDetail>
              <div>
                <PdfDetailElement>
                  {convertBirth(userInfoData.birthday)}
                </PdfDetailElement>
                <PdfDetailElement>
                  {locationConvert(userInfoData.address)}
                </PdfDetailElement>
                <PdfDetailElement>@{userInfoData.snsAddress}</PdfDetailElement>
              </div>
            </PdfProfileText>
          </PdfProfileInner>
          <PdfProfileImage src={userInfoData.profileImage} />
        </PdfProfileWrapper>
        <PdfCategory>경력</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {resumeData.career.map((data, id) => (
            <PdfCareerInner key={id}>
              <PdfCareerRowLeft>
                <PdfPosition>{convertPosition(data.position)}</PdfPosition>
                <PdfDuration>
                  {changeDateYM(data.joinAt)}~{changeDateYM(data.quitAt)}
                </PdfDuration>
              </PdfCareerRowLeft>
              <PdfCareerRowRight>
                <PdfCompany>{data.company}</PdfCompany>
                <PdfWorkedOn>{data.workedOn}</PdfWorkedOn>
                <PdfHr
                  marginTop={6}
                  display={resumeData.career.length - 1 == id && 'none'}
                />
              </PdfCareerRowRight>
            </PdfCareerInner>
          ))}
        </PdfCareerWrapper>
        <PdfCategory>자격증</PdfCategory>
        <PdfHr marginTop={6} />
        <PdfCareerWrapper>
          {resumeData.certificate.map((data) => (
            <>
              <PdfCompany>{data.name}</PdfCompany>
              <PdfDuration>{data.certificateAt}</PdfDuration>
            </>
          ))}
        </PdfCareerWrapper>
      </PdfInner>
    </PdfWrapper>
  );
};

export default ResumePdf;
