import '../components/ContainerBlock'
import '../components/Container'
import Container from '../components/Container'
import microSensorImg from '../assets/microSensorNet.png'
import profileCroppedImg from '../assets/profileCropped.jpg'

function Portfolio() {
    return (
        <>
            <Container
                pageMessage='Past Projects'
                blocks={[
                {
                    id: '1',
                    description:'In a 6 month collaboration with AstraZeneca as as master thesis worker, I explored how Large Language Models tuned for molecular discovery could benefit from contrastive learning',
                    subtitle:'AstraZeneca collaboration: Contrastive Learning for Molecular Representation'
                },
                {
                    id:'2',
                    description:'Testing deploy tag dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:microSensorImg,
                    subtitle:'Project title 2'
                },
                {
                    id:'3',
                    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium necessitatibus inventore perferendis iusto omnis nam debitis ea modi nesciunt magnam praesentium, voluptatum magni quod! Cumque nobis deleniti eos dolor?',
                    imageSource:profileCroppedImg,
                    subtitle:'Project title 3'
                }

            ]}
            />
        </>
    )
}

export default Portfolio