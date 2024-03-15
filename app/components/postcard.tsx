export default function PostCard() {
  return (
    <>
      <div id="front" className="w-[6in] h-[4in] bg-white shadow-lg p-[0.25in] hidden">

      </div>
      <div id="back" className="w-[6in] h-[4in] bg-white shadow-lg p-[0.25in]">
        <table className="w-full h-full table-fixed">
          <tbody>
            <tr>
              <td className="border-r-black border-r-2"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}