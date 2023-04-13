import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import { RequisitionDetailsForm } from "./RequisitionDetailsForm";
import PreviewCard from "./PreviewCard";
import { PageNumbers } from "../../interface/home";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {

  const initRequisitionDetails = {
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: ""
  }
  const initJobDetails = {
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  }
  const initInterviewSettings = {
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  }
  const [page, setPage] = useState<PageNumbers>(0);
  const [requisitionDetails,setRequisitionDetails] = useState(initRequisitionDetails);
  const [jobDetails,setJobDetails] = useState(initJobDetails);
  const [interviewSettings,setInterviewSettings] = useState(initInterviewSettings);
  const handlePage = (pageNumber: PageNumbers) => {
    setPage(pageNumber);
  };
  const getRequisitiondata = (data: any) =>{
    setRequisitionDetails(data);
  }
  const getJobdata = (data: any) =>{
    setJobDetails(data);
  }
  const getInterviewdata = (data: any) =>{
    setInterviewSettings(data);
  }
  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={page} isLazy lazyBehavior="keepMounted">
          <TabList>
            <CustomTab>Requistion Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionDetailsForm getData = {getRequisitiondata} handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm getData={getJobdata} handleTab={handlePage} />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm getData={getInterviewdata} handleTab={handlePage} />
              </TabPanel>
            </TabPanels>
            <PreviewCard  
              requisitionDetails={requisitionDetails}  
              jobDetails={jobDetails}
              interviewSettings={interviewSettings}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
