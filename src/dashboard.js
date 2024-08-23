// once the user logged in dashboard will appear

import React from 'react';
import { Table, Text, TableTd, TableThead, TableTr, TableTbody, Button } from '@mantine/core';
import { AssetsData, UsersData } from './assets';

const Dashboard = ({ onLogout }) => {
  
  return (
    <div>
        <Text>Hi User</Text>
        <Button 
            style={{
                display: 'flex',
                flexDirection: 'row-reverse'
            }}
            onClick={onLogout}
        >
            Logout
        </Button>
        <Text>Users Table</Text>
        <Table>
            <TableThead>
                <TableTr>
                    <TableTd>ID</TableTd>
                    <TableTd>Name</TableTd>
                    <TableTd>Mail</TableTd>
                </TableTr>
            </TableThead>
            <TableTbody>
                {UsersData.map((item) => (
                    <TableTr key={item.id}>
                        <TableTd>{item.id}</TableTd>
                        <TableTd>{item.fullName}</TableTd>
                        <TableTd>{item.email}</TableTd>
                    </TableTr>
                ))}
            </TableTbody>
        </Table>
        <Text>Assets</Text>
        <Table>
            <TableThead>
                <TableTr>
                    <TableTd>Asset ID</TableTd>
                    <TableTd>User Name</TableTd>
                    <TableTd>Mail</TableTd>
                    <TableTd>Asset</TableTd>
                </TableTr>
            </TableThead>
            <TableTbody>
                {AssetsData.map((item) => (
                    <TableTr key={item.assetId}>
                        <TableTd>{item.assetId}</TableTd>
                        <TableTd>{item.userName}</TableTd>
                        <TableTd>{item.userMailId}</TableTd>
                        <TableTd>{item.assetName}</TableTd>
                    </TableTr>
                ))}
            </TableTbody>
        </Table>
    </div>
  );
};

export default Dashboard;
