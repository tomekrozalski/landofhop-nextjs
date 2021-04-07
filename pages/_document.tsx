import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

type Props = {
  cookies: string[];
};
export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    if (ctx.req && ctx.req.headers.cookie) {
      return {
        ...initialProps,
        cookies: ctx.req.headers.cookie.split(`;`).map(value => value.trim()),
      };
    }

    return { ...initialProps, cookies: [] };
  }

  render() {
    const isVisited = !!this.props.cookies.find(
      cookie => cookie === 'isVisited=true',
    );

    return (
      <Html>
        <Head />
        <body className={isVisited ? `non-active` : `active-cookie-bar`}>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
