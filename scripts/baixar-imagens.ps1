# Baixa as fotos originais do site para scripts\originais (não vão para o site publicado).
$ErrorActionPreference = "Stop"
$dest = Join-Path $PSScriptRoot "originais"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$imgs = [ordered]@{
  "hero" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBnPISxjZBgZYrNSR3Nydr_oDWypmC1eugcAbtZknVQVOw_roAggvybxZNChHImth-V_fii2FVwMboqImzUIDDuFec-Urp-Wn78muU_LpmoYRNfPTCkL18DhN66MPS1zo88b54RWkXSINdx1HxignJDXQCWeirWrVCGccQckgHoXCBM6nDTDlr70VT4Dp3nCUzMOZTvQ-QM5ysan1YFH-3ka6iutTLcx-W5KoOfgK3vCtMKtopMYg_y"
  "retrato" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBz-jVnPmlT_pjA5fVA_Tp8DFBbu65nCNW92EpQgtqtRDnHMsqIpD6pdhjwBerBbsLhAAnMoqrtfwKV3QQkXiLuVOOTjc24lfdi_mhFi4Z_f_fdGYiT9twJcaXyJ3W_Udciyu-PYmpP9jdIyA9w1n9_xv7VMS70SpZ8RNqP0szFjHtHTRTge1icxyKcYv2VhZMXPqqlzzXezB9JCurvjhbRlPJHrz3w5YRVYqfh-w4X9lApByB1ea61"
  "abordagem" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCkY3hkfEVuEXz20IrR7saBzCXj4ryytdV7MIrfPh_EQaLatfSZVBYdmTCTOFu6ojDMSB4Upu295ah52E6IikIRL5sbOLufimsHXc4B_CX_6liBK6X7Syl6mainJe9Gv_5tS7wk_y8U5ISCiCq-VvICL4nzb3lwPWfmScJNZ-UFMv15Tn061zNyn7GBRnl7Py2a1qzl-egI1DHLyUTpTth3M85bQ6OmqOFJ4D4mUI0vvzd_VK1MAVVI"
  "og" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDaOb18qdgWgOJaJ1Gsex2DZRXXI-0OEoDUkDRaNn_zfULHnOJCYQjfmc6-iy9-ZDkBMFHNd--BXTmrJ5U7VanEsMGGlHrnk2N-3oWBuDLWD6Btie6oPLvdFpfT4_Bpn6svuoCBLbo7J12QBpB2f5N8ZXn9bE__OBWJFOO9W-V0jnoO8_yc8rdgiEF67GK-XUwCJ1NFt280zvJ-i32xfad9ws3ZHyu9iYgcIiayYu6DN7vv_0nQJADW"
}
foreach ($n in $imgs.Keys) {
  Invoke-WebRequest -Uri $imgs[$n] -OutFile (Join-Path $dest "$n.src") -UseBasicParsing
  Write-Host "OK: $n"
}
Write-Host "Pronto. Pode me avisar."
