export default function Contact(props) {
  const { id, name, pictureUrl, popularity, wonEmmy, wonOscar } = props.contact;
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="actor or actress" width="100px" />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>{wonOscar && "🏆"}</td>
      <td>{wonEmmy && "🏆"}</td>
      <td>
        <button onClick={props.handleClick}>Delete</button>
      </td>
    </tr>
  );
}
