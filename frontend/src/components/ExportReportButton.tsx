"use client"

import { toPng } from "html-to-image"

export default function ExportReportButton() {

  const handleExport = async () => {

    const element = document.getElementById(

      "share-report"

    )

    if (!element) return

    const dataUrl = await toPng(
        element,
        {
          cacheBust: true,
      
          pixelRatio: 2,
      
          width:
            element.scrollWidth,
      
          height:
            element.scrollHeight
        }
      )

    const link =
      document.createElement("a")

    link.download =
      "iconmusic-report.png"

    link.href =
      dataUrl

    link.click()

  }

  return (

    <button

      onClick={handleExport}

      className="
      mt-4
      rounded-xl
      px-4
      py-3
      bg-white/10
      border
      border-white/10
      hover:bg-white/20
      transition
      "
    >

      📸 Export Report

    </button>

  )

}