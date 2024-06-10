type Link = {
  id: number;
  url: string;
  text: string;
};

type Props = {
  links: Link[];
};

// TODO: ここから再開
export const Options = ({ links }: Props) => {
  return <div>options</div>;
};
