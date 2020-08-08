const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
	if(!process.env.GATSBY_SNIPCART_API_KEY){
		throw new Error('No Snipcart API key environment variable found.')
    }

	const components = [
		<div id="snipcart" data-api-key={process.env.SNIPCART_API_KEY} data-config-add-product-behavior="none" hidden>
        </div>
    ]

    components.push(<script src="https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js"></script>)

	return setPostBodyComponents(components)
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents}) => {
    let headComponents = getHeadComponents()
    headComponents.push(<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.css" />)
    return replaceHeadComponents(headComponents)
}