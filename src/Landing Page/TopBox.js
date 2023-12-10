import { Box, Typography } from '@mui/material';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const TopBox = () => {
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '25%', md: '7%' } }}>
                <Stack direction="row" spacing={6}>
                    <Stack alignItems="center">
                        <Avatar
                            alt="M"
                            src="https://d2xamzlzrdbdbn.cloudfront.net/products/d6ec48a8-80c3-4cc3-a313-493418e7c4de23250736.jpg"
                            sx={{ width: { xs: 64, sm: 80, md: 80 }, height: { xs: 64, sm: 80, md: 80 } }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        />
                        <Typography variant="subtitle1">Mobiles</Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <Avatar
                            alt="L"
                            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71p-M3sPhhL.jpg"
                            sx={{ width: { xs: 64, sm: 80, md: 80 }, height: { xs: 64, sm: 80, md: 80 } }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        />
                        <Typography variant="subtitle1">Laptops</Typography>
                    </Stack>
                    <Stack alignItems="center">
                        <Avatar
                            alt="H"
                            src="https://thumbs.dreamstime.com/b/personal-healthcare-hygiene-cleaning-products-hygiene-products-personal-health-care-toiletries-use-cosmetics-vector-172986182.jpg"
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

