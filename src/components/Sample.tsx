import { FC } from 'react'
import PropTypes from 'prop-types'

interface Props {
	greetings: string
}

const Sample: FC<Props> = ({ greetings }) => {
	return <h1>{greetings} world!</h1>
}

Sample.propTypes = {
	greetings: PropTypes.string.isRequired,
}

export default Sample
