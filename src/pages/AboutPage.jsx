import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur aliquid eos animi corporis veniam modi maxime harum blanditiis quaerat nemo, molestiae suscipit odio consectetur quas ab perferendis facere laborum quibusdam?</p>
            <p>Verion: 1.0.0</p>

            <p>
                <Link to="/">Back To home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage