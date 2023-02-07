import { FaTwitter, FaTelegramPlane, FaFacebookF } from "react-icons/fa";

export const dataFooterContact = [
  {
    name: "Dashboard",
    subLink: [
      {
        name: "Accounts",
        link: "/accounts",
      },
      {
        name: "Tokens",
        link: "/tokens",
      },
    ],
  },
  {
    name: "Blocks",
    subLink: [
      {
        name: "Uncles",
        link: "/blocks",
      },
      {
        name: "Forked Blocks",
        link: "123",
      },
    ],
  },
  {
    name: "Transactions",
    subLink: [
      {
        name: "Validated",
        link: "123",
      },
      {
        name: "Pending",
        link: "123",
      },
    ],
  },
  {
    name: "APIs",
    subLink: [
      {
        name: "GraphQL",
        link: "https://explorer.lovely.finance/graphiql",
      },
      {
        name: "RPC",
        link: "https://explorer.lovely.finance/api-docs",
      },
      {
        name: "Lovely RPC",
        link: "https://explorer.lovely.finance/eth-rpc-api-docs",
      },
    ],
  },
];

export const dataFooterIconContact = [
  {
    icon: <FaTwitter />,
    link: "https://explorer.lovely.finance/uncles#",
  },
  {
    icon: <FaTelegramPlane />,
    link: "https://explorer.lovely.finance/uncles#",
  },
  {
    icon: <FaFacebookF />,
    link: "https://explorer.lovely.finance/uncles#",
  },
];
