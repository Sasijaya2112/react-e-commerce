import { Box, Typography } from '@mui/material';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const TopBox = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '5%', md: '2%' } }}>
                <Stack direction="row" spacing={6}>
                    <Stack alignItems="center">
                        <Avatar
                            alt="M"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: { xs: 64, sm: 80, md: 80 }, height: { xs: 64, sm: 80, md: 80 } }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        />
                        <Typography variant="subtitle1">Mobiles</Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <Avatar
                            alt="L"
                            src="/static/images/avatar/2.jpg"
                            sx={{ width: { xs: 64, sm: 80, md: 80 }, height: { xs: 64, sm: 80, md: 80 } }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        />
                        <Typography variant="subtitle1">Laptops</Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <Avatar
                            alt="H"
                            src="/static/images/avatar/3.jpg"
                            sx={{ width: { xs: 64, sm: 80, md: 80 }, height: { xs: 64, sm: 80, md: 80 } }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        />
                        <Typography variant="subtitle1">Health Care</Typography>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
}

export default TopBox;

