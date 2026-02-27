export default function SelectCategory({ name , categories }) {
  return (
    <select id={name} name={name} required>
      {categories.map((cat) => (
        <option key={cat.category_name} value={cat.category_name.toUpperCase()}>
          {cat.category_name.charAt(0).toUpperCase() +
            cat.category_name.toLowerCase().slice(1)}
        </option>
      ))}
    </select>
  );
}
