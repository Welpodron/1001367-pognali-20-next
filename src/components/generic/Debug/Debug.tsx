export const Debug = (props: any) => {
  return (
    <ul className="p-4 bg-slate-200 space-y-2 m-2 rounded">
      {Object.keys(props).map((key, index) => {
        return (
          <li key={index}>
            <p className="font-bold text-xs mb-1">{key}:</p>
            <pre className="italic text-xs leading-none">
              {JSON.stringify(props[key], null, 2)}
            </pre>
          </li>
        );
      })}
    </ul>
  );
};
