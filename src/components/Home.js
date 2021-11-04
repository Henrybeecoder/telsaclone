import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Deliveries"
                backgroundimg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Deliveries"
                backgroundimg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
height: 100vh;
`