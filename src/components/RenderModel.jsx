import React, { Suspense } from 'react'

const RenderModel = ({children, className}) => {
    return (
        <Canvas
        className={clsx()}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}