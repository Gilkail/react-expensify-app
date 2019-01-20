import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export default ({id, description, amount, createdAt}) => (

    <Link to={`/edit/${id}`} className="list-item">
        <div>
            <h3 className="list-item--title">{description}</h3>
            <span className="list-item--subtitle">{moment(createdAt).format('DD MMMM YYYY')}</span>
        </div>
        <h3>{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>

)
