$dir = (Get-ChildItem -Path "C:\Users\DELL\Desktop\ktnl\T*li*u" | Select-Object -First 1).FullName
$docxPath = (Get-ChildItem -Path "$dir\*dn*y*.docx" | Select-Object -First 1).FullName
Write-Output "Found Docx Path: $docxPath"

Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$stream.Close()
$zip.Dispose()

# Parse XML to strip tags
$xml = [xml]$xmlText
$ns = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$nodes = $xml.SelectNodes('//w:t', $ns)
$text = ""
foreach ($node in $nodes) {
    $text += $node.InnerText + "`n"
}
$text | Out-File -FilePath 'scratch/extracted_doc_text.txt' -Encoding UTF8
Write-Output "Extracted length: $($text.Length)"
