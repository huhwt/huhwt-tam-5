///////////////////////////////////////////////////////////////////////////////
//
// Topographic Attribute Maps Demo
// Copyright 2020 Reinhold Preiner, Johanna Schmidt, Gabriel Mistelbauer
//
// This code is licensed under an MIT License.
// See the accompanying LICENSE file for details.
//
// i18n functionality added by huhwt
//
///////////////////////////////////////////////////////////////////////////////

function MENUBAR_html() {
	html_mb = `
	<div class="title">
		Topographic Attribute Maps
		<span id="version" class="version">1.19</span>
	</div>
	<fieldset>
		<legend><label>` + i18n("mb_LF") + `</label></legend>
		<table border="0" cellpadding="0" cellspacing="1">
			<tr>
				<td style="padding-right:4px">
					<input class="filelabel" type="text" id="filename" readonly="" />
				</td>
				<td>
					<input type="file" id="browse" name="fileupload" style="display: none" onChange="onChangeFile(event)" accept=".json, .ged, .tam, .tfm" />
					<input class="button" type="button" style="border:1px solid gray" value="..." id="fakeBrowse" onclick="document.getElementById('browse').click()" />
				</td>
			</tr>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label>` + i18n("mb_SF") + `</label></legend>
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tr>
				<td class="paramlabel">
					<input class="button" type="button" style="border:1px solid gray" value="Graph" id="btnSave"
						onclick="renderer.saveData()" />
					<input class="button" type="button" style="border:1px solid gray" value="SVG Image" id="btnSvgExport"
						onclick="createDownloadSVG(document.getElementById('tam').outerHTML, 'tam.svg')" />
				</td>
			</tr>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label class="toggler" for="toggle_ia">` + i18n("mb_ntrct") + `</label></legend>
		<input class="menu_toggler" type="checkbox" id="toggle_ia" checked="" hidden="" />
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tr>
				<td class="paramlabel">` + i18n("mb_Frz") + `</td>
				<td class="param"><label class="switch"><input id="settings_freeze" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_HghlC") + `</td>
				<td class="param"><label class="switch"><input id="settings_select_time" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_sYV") + `</td>
				<td class="param"><label class="switch"><input id="settings_show_yearvalues" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_sNI") + `</td>
				<td class="param"><label class="switch"><input id="settings_show_tooltips" type="checkbox"><span class="slider"></span></label></td>
			</tr>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label class="toggler" for="toggle_layout">Force Layout</label></legend>
		<input class="menu_toggler" type="checkbox" id="toggle_layout" checked="" hidden="" />
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tbody>
				<tr>
					<td class="paramlabel">Gravity X:</td>
					<td class="param"><input type="number" id="settings_gravity_x" min="0" step="0.01" value="0.1" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">Gravity Y:</td>
					<td class="param"><input type="number" id="settings_gravity_y" min="0" step="0.01" value="0.1" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">Repulsion Strength:</td>
					<td class="param"><input type="number" id="settings_repulsion_strength" min="0" step="20" value="2000" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">Link Strength:</td>
					<td class="param"><input type="number" id="settings_link_strength" min="0" step="0.1" value="2" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">Similarity Strength:</td>
					<td class="param"><input type="number" id="settings_simforce_strength" min="0" step="0.1" value="1" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">Friction:</td>
					<td class="param"><input type="number" id="settings_friction" min="0.0" max="1.0" step="0.1" value="0.0" class="paramspinbox"></td>
				</tr>
			</tbody>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label class="toggler" for="toggle_ga">` + i18n("mb_GA") + `</label></legend>
		<input class="menu_toggler" type="checkbox" id="toggle_ga" checked="" hidden="" />
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tbody>
				<tr>
					<td class="paramlabel">` + i18n("mb_SG") + `</td>
					<td class="param"><label class="switch"><input id="settings_show_graph" type="checkbox"><span class="slider"></span></label></td>
				</tr>
				<tr>
					<td class="paramlabel">` + i18n("mb_SL") + `</td>
					<td class="param"><label class="switch"><input id="settings_show_links" type="checkbox"><span class="slider"></span></label></td>
				</tr>
				<tr>
					<td class="paramlabel">` + i18n("mb_SN") + `</td>
					<td class="param"><label class="switch"><input id="settings_show_names" type="checkbox"><span class="slider"></span></label></td>
				</tr>
				<tr>
					<td class="paramlabel">` + i18n("mb_LW") + `</td>
					<td class="param"><input type="number" id="settings_linkwidth" min="1" max="20" step="1" value="6" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">` + i18n("mb_NR") + `</td>
					<td class="param"><input type="number" id="settings_noderadius" min="1" max="100" step="1" value="15" class="paramspinbox"></td>
				</tr>
				<tr>
					<td class="paramlabel">` + i18n("mb_NLO") + `</td>
					<td class="param"><input type="number" id="settings_pnodeopacity" min="0.0" max="1.0" step="0.1" value="1.0" class="paramspinbox"></td>
				</tr>
			</tbody>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label class="toggler" for="toggle_ma">` + i18n("mb_MA") + `</label></legend>
		<input class="menu_toggler" type="checkbox" id="toggle_ma" checked="" hidden="" />
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tr>
				<td class="paramlabel">` + i18n("mb_SM") + `</td>
				<td class="param"><label class="switch"><input id="settings_show_contours" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_RC") + `</td>
				<td class="param"><label class="switch"><input id="settings_reversecolor" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_INN") + `</td>
				<td class="param"><label class="switch"><input id="settings_interpolation_type" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_EL") + `</td>
				<td class="param"><label class="switch"><input id="settings_embed_links" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_ST") + `</td>
				<td class="param"><label class="switch"><input id="settings_show_tunnels" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_ES") + `</td>
				<td class="param"><label class="switch"><input id="settings_shading" type="checkbox"><span class="slider"></span></label></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_DD") + `</td>
				<td class="param"><input type="number" id="settings_dilation_degree" min="0" max="100" step="1" value="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_MinRV") + `</td>
				<td class="param"><input type="number" id="settings_range_min" value="1750" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_MaxRV") + `</td>
				<td class="param"><input type="number" id="settings_range_max" value="2020" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_CS") + `</td>
				<td class="param"><input type="number" id="settings_contour_step" min="0" step="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_CSb") + `</td>
				<td class="param"><input type="number" id="settings_contour_big_step" min="0" step="10" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_IS") + `</td>
				<td class="param"><input type="number" id="settings_indicator_size" min="0" step="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_HScl") + `</td>
				<td class="param"><input type="number" id="settings_height_scale" min="0" max="100" value="80" step="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_Res") + `</td>
				<td class="param"><input type="number" id="settings_resolution" min="10" max="5000" value="500" step="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_LSS") + `</td>
				<td class="param"><input type="number" id="settings_link_sample_step" min="1" step="1" class="paramspinbox"></td>
			</tr>
			<tr>
				<td class="paramlabel">` + i18n("mb_UT") + `</td>
				<td class="param"><input type="number" id="settings_underground_threshold" min="0" step="5" class="paramspinbox"></td>
			</tr>
		</table>
	</fieldset>
	<!-------------------------------------------------------------------------------------->
	<fieldset>
		<legend><label>` + i18n("language") + `</label></legend>
		<table class="menu" border="0" cellpadding="0" cellspacing="1">
			<tr>
				<td class="paramlabel">
					<input class="button" type="button" style="border:1px solid gray" value="de" id="btn_l_de"
						   onclick="Wswitch_locale('de')" />
					<input class="button" type="button" style="border:1px solid gray" value="en" id="btn_l_en"
						   onclick="Wswitch_locale('en')" />
				</td>
			</tr>
		</table>
	</fieldset>`;

    return html_mb;
}
