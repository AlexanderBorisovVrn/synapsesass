type Props = {
    params:{
        slug:string
    }
}

const Slug = ({params:{slug}}:Props) => {
    return (
        <div className="text-white">{slug}</div>
    )
}

export default Slug