import moment from 'moment'

export default [{
    id: 1,
    description: 'Gum',
    note: "",
    amount: 1922,
    createdAt: 0
},{
    id: 2,
    description: 'Rent',
    note: "",
    amount: 12,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: 3,
    description: 'Credit cart',
    note: "",
    amount: 2001,
    createdAt: moment(0).add(4, 'days').valueOf()
}]