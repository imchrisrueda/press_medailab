$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$logoDestination = Join-Path $projectRoot 'assets/logos-user'
New-Item -ItemType Directory -Force -Path $logoDestination | Out-Null
$logos = @{
  'ute.png' = 'https://upload.wikimedia.org/wikipedia/commons/1/19/Logo-ute_%282%29.png'
  'puce.png' = 'https://www.puce.edu.ec/wp-content/uploads/2022/08/logo-puce-nuevo.png'
  'uide.png' = 'https://images.credly.com/images/5371ddc2-611e-4071-8480-8d8e2b2e3cdb/blob.png'
  'nibio.png' = 'https://www.barentswatch.no/media/ktpiikwp/nibio.png'
  'upm.png' = 'https://www.industriales.upm.es/wp-content/uploads/2021/05/LogoETSII2.png'
  'uco.svg' = 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Logounicordoba.svg'
}
foreach ($entry in $logos.GetEnumerator()) {
  Invoke-WebRequest -Uri $entry.Value -OutFile (Join-Path $logoDestination $entry.Key) -UseBasicParsing
  Write-Output ('Descargado: ' + $entry.Key)
}
Write-Output ('Logos guardados en ' + $logoDestination)
