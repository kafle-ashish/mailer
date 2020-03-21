export interface ISellerTemplateProps {
    name: string;
}

export default function SellerTemplate({ name }: ISellerTemplateProps) {
    return `
      <body>
          <h1>Welcome to Shop2More!</h1>
          <p>
              <b>Hello ${name}!</b> <br />
              We are glad that you have chosen to join with us!
          </p>
          <section>
              <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hFiPM2t-p3g"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
              ></iframe>
          </section>
      </body>
`;
}
