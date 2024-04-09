interface Props {
    params: {
        id: string;
    }
}


const ActivationPage = ({ params }: Props) => {
    return <div> Activation Page: {params.id}</div>
}


export default ActivationPage
