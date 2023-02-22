import styles from './paymentMethods.module.css'


export default function paymentMethods() {

    const cards = [
        {
            type: '1',
            details: '1',
            country: '1',
            status: '1',
            registration: '1'
        },
         {
            type: '2',
            details: '2',
            country: '2',
            status: '2',
            registration: '2'
        }
    ]

    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(card=>
                       
                    <tr>
                        <td>{card.type}</td>
                        <td>{card.details}</td>
                        <td>{card.country}</td>
                        <td>{card.status}</td>
                        <td>{card.registration}</td>

                    </tr>
                     )}
                </tbody>
            </table>
            <div>
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}