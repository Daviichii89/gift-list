// @ts-nocheck
import useFirestore from "../hook/useFirestore"

const GiftsListFirestore = () => {
    const { data, error, loading } = useFirestore()

    if (loading) return <p className="text-white">Cargando los datos...</p>
    if (error) return <p className="text-white">{error}</p>
  return (
    <div>
        {
            data && data.map(item => (
                <div key={item.id}>
                    <p className="text-white">{item.title}</p>
                    <p className="text-white">{item.author}</p>
                    <p className="text-white">{item.isOnSale}</p>
                </div>
            ))
        }
    </div>
  )
}

export default GiftsListFirestore