import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			const styleElement = [
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>,
			];
			return {
				...initialProps,
				styles: styleElement,
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<html lang="ko" />
				<Head>
                    <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                    />  
                </Head>
				<body>
					<Main />
					<NextScript />
                        <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                            crossOrigin="anonymous"
                        />
				</body>
			</Html>
		);
	}
}

export default MyDocument;