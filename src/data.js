import img1 from "../src/asset/paypal.png";
import img2 from "../src/asset/pledge.png";
import img3 from "../src/asset/capitalone.png";
import img4 from "../src/asset/cibc.png";
import img5 from "../src/asset/nabaoc.png";
import img6 from "../src/asset/pc.png";
import img7 from "../src/asset/rbc-imag.png";
import img8 from "../src/asset/scotiabank.png.crdownload";
import img9 from "../src/asset/TD_Canada_Trust_logo.svg.png";
import img10 from "../src/asset/amex-new-brand.webp";
import img11 from "../src/asset/wells-fargo-logo.png";
import img12 from "../src/asset/bmo.png";

const data = {
  cardData: [
    {
      id: 1,
      img: img1,
      title: "PayPal",
      description: "Make a payment with your PayPal Account",
      webURL: "https://www.paypal.com/fundraiser/hub",
    },
    {
      id: 2,
      img: img2,
      title: "Pledge Donation",
      description: "Make a Donation with the Pledge Donation Platform",
      webURL: "https://www.pledge.to/offrande-vvcm#donate",
    },
    {
      id: 3,
      img: img3,
      title: "CapitalOne",
      description: "Make a payment with your CapitalOne",
      webURL: "https://verified.capitalone.com/auth/signin",
    },
    {
      id: 4,
      img: img4,
      title: "CIBC",
      description: "Make a payment with your CIBC Account",
      webURL:
        "https://www.cibconline.cibc.com/ebm-resources/public/banking/cibc/client/web/index.html#/signon",
    },
    {
      id: 5,
      img: img5,
      title: "National Bank of Canada",
      description: "Make a payment with your National Bank of Canada Account",
      webURL:
        "https://connexion.bnc.ca/?SAMLRequest=fZJBT%2BMwEIX%2FSuR7EsckTWo1RdVWSJVYhKDsYW%2BuMwUvydh47Bb%2BPSFQ1D3sXkfP7735xovL16FPDuDJWGxZkXGWAGrbGXxs2cP2Km3Y5XJBauiFk6sYnvAOXiJQSFZE4MP47IdFigP4e%2FAHo%2BHh7rplTyE4knmOO53Z56AybYecyOaTU86tEk65whW8f%2Fxzs2mEq1myHm0NqjBVOTloiwiv4yjboc60YsmV9RqmKi3bq56AJZt1y0wnRD3jJS%2BaeVlVvC5mZXXRlPVcNKOCKMIGKSgMLRNciJTPUl5tCyEvKlnOs7oUv1ny64RCfKAY4SDJz%2B1bFj1Kq8iQRDUAyaDl%2FerntRyl0nkbrLY9%2B4Ilp0B%2F7vB%2FA3XCyZan1Y%2FH4xm8CRx9Mk7HuIPpwOfknN49719ieIsKfYQ4HBb5eYXv692MmZv1re2NfvuAOKjw70pFVkwT06X7SSojkgNt9gY6li%2B%2FMv7%2BE8t3&RelayState=%252Foauth2%252Fv1%252Fauthorize%252Fredirect%253Fokta_key%253DA-yAix59A4YS4W9Rb8haodoYd1Mc59QU1mCeZUw-OKw&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=LGYwIit2ymXtNePw2YPt6OozcDR2ztFqqP7t8EJeXtJ96osP8l6RWjQtN1xQhTbYbycw4Fkp4AknBjETcjhYIaeBQG1FqkWzl%2Fy8y85ZUbn7232vVKegGeDesQZxjT2nCAVqv3%2FEjUD6kVP6P8soDDmNxJJ%2Bf8l3%2BRhgKYwldN9wGWb4bVs47vjjFSanuPiH2eH4HLtU7tXR3W1EkrRmZNHzaATk%2F2gXZoR7jBGJzAVSNgdYn9FUmQVqx88DLTuGdQ56MIO1GaHuhtw4w3SIS3WUoqynEVCCIDvokFaAF%2BN0hYlORzeNihSmZ7P72uCQ1VxGDH8BrXnzVEMRLqkR3Q%3D%3D",
    },
    {
      id: 6,
      img: img6,
      title: "PC Financial",
      description: "Make a payment with your PC Financial Account",
      webURL: "https://secure.pcfinancial.ca/en/login",
    },
    {
      id: 7,
      img: img7,
      title: "RBC",
      description: "Make a payment with your RBC Account",
      webURL: "https://secure.royalbank.com/statics/login-service-ui/index#/full/signin?_ga=2.141769970.1195167264.1654432686-925965818.1653779922&_gac=1.83633892.1653779922.CjwKCAjwkMeUBhBuEiwA4hpqEFpr8xWzCjo8RL0CmFwE4ctKNb8Xos0TnHG9IKEH3VzIStrChdx0IBoCwRoQAvD_BwE&_gl=1*1e44kc9*_gcl_aw*R0NMLjE2NTM3Nzk5MjIuQ2p3S0NBandrTWVVQmhCdUVpd0E0aHBxRUZwcjh4V3pDam84UkwwQ21Gd0U0Y3RLTmI4WG9zMFRuSEc5SUtFSDNWeklTdHJDaGR4MElCb0N3Um9RQXZEX0J3RQ..&LANGUAGE=ENGLISH",
    },
    {
      id: 8,
      img: img8,
      title: "Scotiabank",
      description: "Make a payment with your Scotiabank Account",
      webURL:
        "https://auth.scotiaonline.scotiabank.com/online?oauth_key=hvhW9-ocZ1U&oauth_key_signature=eyJraWQiOiJrUFVqdlNhT25GWUVDakpjMmV1MXJvNGxnb2VFeXJJb2tCbU1oX3BiZXNVIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWZlcmVyIjoiaHR0cHM6XC9cL3d3dy5zY290aWFiYW5rLmNvbVwvIiwib2F1dGhfa2V5IjoiaHZoVzktb2NaMVUiLCJjb25zZW50X3JlcXVpcmVkIjpmYWxzZSwicmVkaXJlY3RfdXJpIjoiaHR0cHM6XC9cL3d3dy5zY290aWFvbmxpbmUuc2NvdGlhYmFuay5jb21cL29ubGluZVwvbGFuZGluZ1wvb2F1dGhsYW5kaW5nLmJucyIsImV4cCI6MTY1NDQzMzk0OCwiaWF0IjoxNjU0NDMyNzQ4LCJqdGkiOiI1ZGJhYTYzZS0zZDYwLTQ5NDQtOTU4ZS1lYzc5MWEyMzU0NmMiLCJjbGllbnRfaWQiOiI4ZWU5MGMzOS0xYzUyLTRmZjQtOGFlNi1hN2I1NGM1Mzk5MzMiLCJjbGllbnRfbWV0YWRhdGEiOnsiQ2hhbm5lbElEIjoiU09MIiwiQXBwbGljYXRpb25Db2RlIjoiSDcifSwiaXNzdWVyIjoiaHR0cHM6XC9cL3Bhc3Nwb3J0LnNjb3RpYWJhbmsuY29tIn0.LpdFubbzTj7CUDhRI6A2zYUyaxYJOfrAMOQtREozrCQ5h7OHNHHLOKtBIsUeYpqU3fOSey7QGjMqqnHAUuCZ2tWL00U16cQo8pZI5_HCXhCBJYMnt92rbDB2RLVGZf5PhATvNA8nBgOjGzw4RAq9DWEgV4QooHLE0zUwTYh7jrXwVZHv-zL6VtojWSQFhsBieFH-M6aO4hkdUCT-5WsRU2vPAmic8Y-r0SDsQVavAEApABnOegm0Wq_1iQq5hFaug-T7s0gDRF4rS8cjUM1USUzrhAbxaP7MCrvjYN6oOQ0dwbLcdCD_QE_H6u-z8d9VgxwV7TKKnXj-Xn61Af6wsQ&preferred_environment=",
    },
    {
      id: 9,
      img: img9,
      title: "TD",
      description: "Make a payment with your TD Account",
      webURL: "https://authentication.td.com/uap-ui/?consumer=easyweb&locale=en_CA&goto=https://easyweb.td.com/waw/ezw/CIPLoginRedirect&execution=e1s1#/uap/login",
    },
    {
      id: 10,
      img: img10,
      title: "American Express",
      description: "Make a payment with your AMEX Account",
      webURL: "https://www.americanexpress.com/en-us/account/login?inav=iNavLnkLog",
    },
    {
      id: 11,
      img: img11,
      title: "Wells Fargo",
      description: "Make a payment with your Wells Fargo Account",
      webURL: "https://connect.secure.wellsfargo.com/auth/login/present?origin=cob",
    },
    {
      id: 12,
      img: img12,
      title: "Bank Of Montreal",
      description: "Make a payment with your Bank of Montreal Account",
      webURL: "https://www1.bmo.com/banking/digital/login?lang=en",
    },
  ],
};
export default data;
