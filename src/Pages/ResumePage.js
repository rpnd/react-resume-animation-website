import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Map from '../Components/Roodmap/Map'

function ResumePage() {
    return (
        <MainLayout>
            <Skills />
            <Map/>
        </MainLayout>
    )
}

export default ResumePage
