"use client"
import { Box, ChakraProvider, Input } from "@chakra-ui/react";
import DataTable from "../components/DataTable";
import { useState } from "react";

const headers = [
  "Timestamp",
  "Purchase Id",
  "Mail",
  "Name",
  "Source",
  "Status",
  "Select",
];

const rows = [
    {
      Timestamp: '2023-07-01 10:00 AM',
      'Purchase Id': 'ABC123',
      Mail: 'john@example.com',
      Name: 'John Doe',
      Source: 'Website',
      Status: 'Pending',
     
    },
    {
      Timestamp: '2023-07-02 02:30 PM',
      'Purchase Id': 'DEF456',
      Mail: 'jane@example.com',
      Name: 'Jane Smith',
      Source: 'Mobile App',
      Status: 'Completed',
     
    },
    {
      Timestamp: '2023-07-03 09:15 AM',
      'Purchase Id': 'GHI789',
      Mail: 'alex@example.com',
      Name: 'Alex Johnson',
      Source: 'Website',
      Status: 'Pending',
     
    },
    {
      Timestamp: '2023-07-04 11:45 AM',
      'Purchase Id': 'JKL012',
      Mail: 'sam@example.com',
      Name: 'Samuel Wilson',
      Source: 'Mobile App',
      Status: 'Completed',
     
    },
    {
      Timestamp: '2023-07-05 03:20 PM',
      'Purchase Id': 'MNO345',
      Mail: 'emily@example.com',
      Name: 'Emily Thompson',
      Source: 'Website',
      Status: 'Pending',
     
    },
    {
      Timestamp: '2023-07-06 08:30 AM',
      'Purchase Id': 'PQR678',
      Mail: 'michael@example.com',
      Name: 'Michael Davis',
      Source: 'Mobile App',
      Status: 'Completed',
     
    },
    {
      Timestamp: '2023-07-07 01:55 PM',
      'Purchase Id': 'STU901',
      Mail: 'lisa@example.com',
      Name: 'Lisa Johnson',
      Source: 'Website',
      Status: 'Pending',
     
    },
    {
      Timestamp: '2023-07-08 10:10 AM',
      'Purchase Id': 'VWX234',
      Mail: 'david@example.com',
      Name: 'David Smith',
      Source: 'Mobile App',
      Status: 'Completed',
     
    },
    {
      Timestamp: '2023-07-09 05:45 PM',
      'Purchase Id': 'YZA567',
      Mail: 'sarah@example.com',
      Name: 'Sarah Brown',
      Source: 'Website',
      Status: 'Pending',
     
    },
    {
      Timestamp: '2023-07-10 12:25 PM',
      'Purchase Id': 'BCD890',
      Mail: 'steven@example.com',
      Name: 'Steven Anderson',
      Source: 'Mobile App',
      Status: 'Completed',
     
    },
   
  ];
  

const MyPage: React.FC = () => {
   
  return (
    <ChakraProvider>
      <Box p={4}>
        <DataTable
          sortable
          caption="Bookings"
          headers={headers}
          rows={rows}
          pagination
        />
      </Box>
    </ChakraProvider>
  );
};

export default MyPage;
