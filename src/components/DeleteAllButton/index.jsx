export const DeleteAllButton = ({ deleteList }) => {

  return (
    <button
      type="submit"
      onClick={deleteList}
      className="btn btn-danger mt-3 mb-3"
    >
      Удалить все
    </button>
  )
}