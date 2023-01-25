export const TitleMaker = ({ className, title, opts }) => {
  return (
    <div className={className}>
      <div style={{ fontWeight: 'bold' }}>{title}</div>

      {opts.length > 0 && (
        <select name="period" id="period">
          {opts.map((x, i) => {
            return (
              <option key={i} value={x.value}>
                {x.label}
              </option>
            )
          })}
        </select>
      )}
    </div>
  )
}
