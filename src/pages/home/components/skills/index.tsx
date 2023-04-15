type Props = {
  skill: string;
};
export function Skills({skill}: Props) {
  return (
    <div className="mb-6">
      <span className="bg-white/25 p-2  rounded-s-xl rounded-e-xl">
        {skill}
      </span>
    </div>
  );
}
