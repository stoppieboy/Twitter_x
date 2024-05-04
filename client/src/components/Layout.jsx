import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Card, Skeleton, CardHeader, CardContent } from "@mui/material"
import React from 'react'

const Layout = () => {

    function ShimmerUI() {
        return(
            <Card sx={{ height: 150, width: 400, m: 2}}>
                <CardHeader
                    avatar={<Skeleton animation="wave" variant='circular' width={40} height={40}/>}
                    title={<Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}} />}
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                <CardContent>
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                </CardContent>
            </Card>
        )
    }

    return (
        <>
            <main>
                <Suspense fallback={<ShimmerUI />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout