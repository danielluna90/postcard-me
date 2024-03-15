export default function PostCard() {
  return (
    <>
      <div id="front" className="w-[6in] h-[4in] bg-white shadow-lg p-[0.25in] hidden">

      </div>
      <div id="back" className="w-[6in] h-[4in] bg-white shadow-lg p-[0.25in]">
        <table className="w-full h-full table-fixed">
          <tbody>
            <tr>
              <td className="h-full border-r-black border-r-2">
                <div id="message" className="w-full h-full">
                  <p className="text-[12px] text-center">THIS SPACE FOR WRITING MESSAGES</p>
                  <p className="width-full mr-8"></p>
                  
                </div>
              </td>
              <td className="h-full flex flex-col justify-between items-end">
                <div id="stamp" className="w-[0.87in] h-[0.98in] bg-black"></div>
                <div id="address-lines" className="w-full h-[2.25in] py-[0.25in] flex flex-col justify-between">
                  <p className="text-[12px] text-center  ml-8 mr-4">THIS SPACE FOR ADDRESS ONLY</p>
                  <hr className="h-0.5 ml-8 mr-4 bg-black border-0" />
                  <hr className="h-0.5 ml-8 mr-4 bg-black border-0" />
                  <hr className="h-0.5 ml-8 mr-4 bg-black border-0" />
                  <hr className="h-0.5 ml-8 mr-4 bg-black border-0" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}