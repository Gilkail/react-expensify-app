import moment from 'moment'

const filters = {
    text: '',
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined
}

const altfilters = {
    text: 'bills',
    sortBy: 'Amount',
    startDate: moment(0),
    endDate: moment(0).add(3)
}

export { filters, altfilters }