import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import { Col, Row } from 'react-bootstrap';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

export default function PopularCard() {
    return (
        <Box>
            <h1 className='mt-5'>Most popular</h1>
            <hr />
            <Row>
                <Col>
                    <Card sx={{ maxWidth: 250 }} className='m-5' style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image="https://www.reliancedigital.in/medias/Oppo-A17-Mobile-Phone-493178364-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzczNXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDhkLzk5MDUxNjA3ODE4NTQuanBnfDM5OGFkYTk0ODk5NDA5Nzg2YWQwZGZmNTI4NzQ2MGM4MmMwNjAwZGI1NzM0NjA2NTBkYzMwMGRkMTY4YmY1ZjI"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                OPPO A 17
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From Rs.10000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size="small"><ShareIcon /></IconButton>
                            <IconButton>
                                <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
                            </IconButton>
                            <Button size='small' variant='contained' color='warning'>add to cart</Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <Card sx={{ maxWidth: 250 }} className='m-5' style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                REDMI 12 PRO+
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From Rs.12000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size="small"><ShareIcon /></IconButton>
                            <IconButton>
                                <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
                            </IconButton>
                            <Button size='small' variant='contained' color='warning'>add to cart</Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <Card sx={{ maxWidth: 250 }} className='m-5' style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image="https://i02.appmifile.com/373_operatorx_operatorx_opx/10/05/2023/657e399a69e188fb194c3804f33fb67d!380x380.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                REDMI NOTE 11S
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From Rs.11500
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size="small"><ShareIcon /></IconButton>
                            <IconButton>
                                <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
                            </IconButton>
                            <Button size='small' variant='contained' color='warning'>add to cart</Button>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <Card sx={{ maxWidth: 250 }} className='m-5' style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="250"
                            image="https://img.etimg.com/thumb/width-640,height-480,imgsize-35708,resizemode-75,msid-98897778/top-trending-products/mobile-phones/6-latest-mobile-phones-with-12gb-ram-in-india-in-2023-starting-at-rs-29999/6-latest-mobile-phones-with-12gb-ram-in-india.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                REDMI NOTE 12 PRO
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From Rs.18000
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton size="small"><ShareIcon /></IconButton>
                            <IconButton>
                                <FavoriteBorderIcon style={{ cursor: 'pointer' }} />
                            </IconButton>
                            <Button size='small' variant='contained' color='warning'>add to cart</Button>
                        </CardActions>
                    </Card>
                </Col>
            </Row>
        </Box>
    );
}
