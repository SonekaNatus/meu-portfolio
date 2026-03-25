Add-Type -AssemblyName System.Drawing
$w = 1200
$h = 420
$bmp = New-Object System.Drawing.Bitmap $w, $h
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.Clear([System.Drawing.Color]::FromArgb(8, 12, 16))
$gridColor = [System.Drawing.Color]::FromArgb(25, 0, 229, 160)
$pen = New-Object System.Drawing.Pen $gridColor, 1
for ($x = 0; $x -lt $w; $x += 60) { $g.DrawLine($pen, $x, 0, $x, $h) }
for ($y = 0; $y -lt $h; $y += 60) { $g.DrawLine($pen, 0, $y, $w, $y) }
$accent = [System.Drawing.Color]::FromArgb(255, 0, 229, 160)
$g.FillRectangle((New-Object System.Drawing.SolidBrush $accent), 80, 178, 48, 3)
$fontMono = [System.Drawing.Font]::new('Consolas', 11.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontTitle = [System.Drawing.Font]::new('Segoe UI', 36.0, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontSub = [System.Drawing.Font]::new('Consolas', 12.0, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$brushMuted = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 125, 133, 145))
$brushText = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 230, 237, 243))
$brushAcc = New-Object System.Drawing.SolidBrush $accent
$g.DrawString('PORTFOLIO', $fontMono, $brushMuted, 80, 125)
$g.DrawString('Kauã Victor', $fontTitle, $brushText, 80, 195)
$g.DrawString('Full Stack · Java · Spring · React · TypeScript', $fontSub, $brushAcc, 80, 275)
$g.DrawString('React + Vite + TypeScript', $fontMono, $brushMuted, 80, 315)
$projRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$out = Join-Path $projRoot 'docs\preview.png'
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$fontMono.Dispose()
$fontTitle.Dispose()
$fontSub.Dispose()
$g.Dispose()
$bmp.Dispose()
Write-Host "Wrote $out"
