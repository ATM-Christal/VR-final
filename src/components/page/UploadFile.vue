<template>
    <div class='background'>
            <el-row>
                <div class="list-wrap">
                    <el-tabs v-model="activePane" @tab-click="tabClick">
                        <el-tab-pane label="上架产品" name="upsale">
                            <el-row>
                                <div class="table-title">一体机</div>
                                <div class="operation">
                                    <el-button @click="handleAllOffsale1">一键下架</el-button>
                                    <el-button type="danger" @click="handleAllDelete1">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="iupsaleText"
                                        @change="handleIUpsaleSearch"
                                        :on-icon-click="handleIUpsaleSearch">
                                    </el-input>  
                                </div>
                                
                                <el-table
                                    :data="tableData1"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange1">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="screentype"
                                            label="屏幕类型"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="monocularresolution"
                                            label="单眼分辨率"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cpu"
                                            label="CPU(GHz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="memory"
                                            label="内存(GB)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="batteryCapacity"
                                            label="电池容量(mAh)"
                                            width="180">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="soundpressurelevel"
                                            label="声压级(dB(A))"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="maximumoutputvoltage"
                                            label="播放器的最大输出电压(mV)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="refreshrate"
                                            label="刷新率(Hz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToOffsale1(scope.$index)" size="small">下架</el-button>
                                        <el-button @click="handleDelete1(scope.$index)" size="small" type="danger">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>         
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleIUpsaleChange"
                                      :current-page.sync="iupPageNum"
                                      :page-size="iupPageSize"
                                      layout="total, prev, pager, next"
                                      :total="iupPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="table-title">PC头显</div>
                                <div class="operation">
                                    <el-button @click="handleAllOffsale2">一键下架</el-button>
                                    <el-button type="danger" @click="handleAllDelete2">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="supsaleText"
                                        @change="handleSUpsaleSearch"
                                        :on-icon-click="handleSUpsaleSearch">
                                    </el-input>  
                                </div>        

                                <el-table
                                    :data="tableData2"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange2">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="screentype"
                                            label="屏幕类型"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="monocularresolution"
                                            label="单眼分辨率"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="soundpressurelevel"
                                            label="声压级(dB(A))"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="maximumoutputvoltage"
                                            label="播放器的最大输出电压(mV)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="refreshrate"
                                            label="刷新率(Hz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToOffsale2(scope.$index)" size="small">下架</el-button>
                                        <el-button @click="handleDelete2(scope.$index)" type="danger" size="small">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>   
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleSUpsaleChange"
                                      :current-page.sync="supPageNum"
                                      :page-size="supPageSize"
                                      layout="total, prev, pager, next"
                                      :total="supPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row>   
                            <el-row>
                                <div class="table-title">手机盒子</div>
                                <div class="operation">
                                    <el-button @click="handleAllOffsale3">一键下架</el-button>
                                    <el-button type="danger" @click="handleAllDelete3">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="eupsaleText"
                                        @change="handleEUpsaleSearch"
                                        :on-icon-click="handleEUpsaleSearch">
                                    </el-input>  
                                </div>       

                                <el-table
                                    :data="tableData3"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange3">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToOffsale3(scope.$index)" size="small">下架</el-button>
                                        <el-button @click="handleDelete3(scope.$index)" type="danger" size="small">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table> 
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleEUpsaleChange"
                                      :current-page.sync="eupPageNum"
                                      :page-size="eupPageSize"
                                      layout="total, prev, pager, next"
                                      :total="eupPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row> 
                        </el-tab-pane>

                        <el-tab-pane label="下架产品" name="offsale">
                            <el-row>
                                <div class="table-title">一体机</div>
                                <div class="operation">
                                    <el-button @click="handleAllUpsale1">一键上架</el-button>
                                    <el-button type="danger" @click="handleAllDelete4">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="ioffsaleText"
                                        @change="handleIOffsaleSearch"
                                        :on-icon-click="handleIOffsaleSearch">
                                    </el-input>  
                                </div>
                                
                                <el-table
                                    :data="tableData4"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange4">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="screentype"
                                            label="屏幕类型"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="monocularresolution"
                                            label="单眼分辨率"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cpu"
                                            label="CPU(GHz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="memory"
                                            label="内存(GB)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="batteryCapacity"
                                            label="电池容量(mAh)"
                                            width="180">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="soundpressurelevel"
                                            label="声压级(dB(A))"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="maximumoutputvoltage"
                                            label="播放器的最大输出电压(mV)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="refreshrate"
                                            label="刷新率(Hz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToUpsale1(scope.$index)" size="small">上架</el-button>
                                        <el-button @click="handleDelete4(scope.$index)" type="danger" size="small">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>         
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleIOffsaleChange"
                                      :current-page.sync="ioffPageNum"
                                      :page-size="ioffPageSize"
                                      layout="total, prev, pager, next"
                                      :total="ioffPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row>
                            <el-row>
                                <div class="table-title">PC头显</div>
                                <div class="operation">
                                    <el-button @click="handleAllUpsale2">一键上架</el-button>
                                    <el-button type="danger" @click="handleAllDelete5">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="soffsaleText"
                                        @change="handleSOffsaleSearch"
                                        :on-icon-click="handleSOffsaleSearch">
                                    </el-input>  
                                </div>        

                                <el-table
                                    :data="tableData5"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange5">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="screentype"
                                            label="屏幕类型"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="monocularresolution"
                                            label="单眼分辨率"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="soundpressurelevel"
                                            label="声压级(dB(A))"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="maximumoutputvoltage"
                                            label="播放器的最大输出电压(mV)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="refreshrate"
                                            label="刷新率(Hz)"
                                            width="150">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToUpsale2(scope.$index)" size="small">上架</el-button>
                                        <el-button @click="handleDelete5(scope.$index)" type="danger" size="small" >删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>   
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleSOffsaleChange"
                                      :current-page.sync="soffPageNum"
                                      :page-size="soffPageSize"
                                      layout="total, prev, pager, next"
                                      :total="soffPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row>   
                            <el-row>
                                <div class="table-title">手机盒子</div>
                                <div class="operation">
                                    <el-button @click="handleAllUpsale3">一键上架</el-button>
                                    <el-button type="danger" @click="handleAllDelete6">一键删除</el-button>
                                    <el-input class="search-input"
                                        placeholder="请输入产品型号"
                                        icon="search"
                                        v-model="eoffsaleText"
                                        @change="handleEOffsaleSearch"
                                        :on-icon-click="handleEOffsaleSearch">
                                    </el-input>  
                                </div>       

                                <el-table
                                    :data="tableData6"
                                    border
                                    style="width: 100%"
                                    @selection-change="handleSelectionChange6">
                                    <el-table-column fixed
                                        type="selection"
                                        width="80">
                                    </el-table-column>
                                    <el-table-column
                                        fixed
                                        prop="productmodel"
                                        label="产品型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column
                                        prop="brand"
                                        label="品牌"
                                        width="120">
                                    </el-table-column>
                                    <el-table-column
                                        prop="salesmodel"
                                        label="销售型号"
                                        width="160">
                                    </el-table-column>
                                    <el-table-column label="产品配置">
                                        <el-table-column
                                            prop="weight"
                                            label="重量(kg)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="安全性">
                                        <el-table-column
                                            prop="workingtemperature"
                                            label="工作温度(℃)"
                                            width="180">
                                        </el-table-column>
                                        <el-table-column
                                            prop="bluerayirradiance"
                                            label="蓝光辐照度(W·m^－2·sr^－1)"
                                            width="200">
                                        </el-table-column>
                                        <el-table-column
                                            prop="broadbandcharacteristicvoltageofearphone"
                                            label="耳机的宽带特征电压(mV)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="boundarywarning"
                                            label="边界警示"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="性能">
                                        <el-table-column
                                            prop="fieldangle"
                                            label="视场角(°)"
                                            width="130">
                                        </el-table-column>
                                        <el-table-column
                                            prop="systemdelay"
                                            label="系统延迟(ms)"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column 
                                            prop="trackingmode"
                                            label="跟踪模式"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="trackingrange"
                                            label="跟踪范围(m)"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column label="视疲劳(20min)">
                                        <el-table-column
                                            prop="meanchangeofvisualacuity"
                                            label="视力变化均值"
                                            width="160">
                                        </el-table-column>
                                        <el-table-column
                                            prop="ssqmean"
                                            label="SSQ均值"
                                            width="140">
                                        </el-table-column>
                                        <el-table-column
                                            prop="cvsmean"
                                            label="CVS均值"
                                            width="130">
                                        </el-table-column>
                                    </el-table-column>
                                    <el-table-column
                                        fixed="right"
                                        label="操作"
                                        width="180">
                                    <template scope="scope">
                                        <el-button @click="handleToUpsale3(scope.$index)" size="small">上架</el-button>
                                        <el-button @click="handleDelete6(scope.$index)" type="danger" size="small">删除</el-button>
                                    </template>
                                    </el-table-column>
                                </el-table> 
                            </el-row>
                            <el-row>
                                <div class="pagination">
                                    <el-pagination
                                      @current-change="handleEOffsaleChange"
                                      :current-page.sync="eoffPageNum"
                                      :page-size="eoffPageSize"
                                      layout="total, prev, pager, next"
                                      :total="eoffPageTotal">
                                    </el-pagination>
                                </div>
                            </el-row>  
                        </el-tab-pane>

                        <el-tab-pane label="更新产品信息" name="upload">
                            <div class="table-title">上传产品信息文件
                                
                            </div>
                            <el-upload
                                class="upload-demo"
                                drag
                                action="upload/product"
                                multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            </el-upload>

                            <div class="table-title">上传产品图片文件
                                
                            </div>
                            <el-upload
                                class="upload-demo"
                                drag
                                action="upload/imgs"
                                multiple>
                                <i class="el-icon-upload"></i>
                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传zip文件，且不超过10MB</div>
                            </el-upload>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-row>
    </div>


</template>

<script>
    import product from '../../assets/product.png';

    export default {
        data: function () {
            return {
                hostUrl: '/VR',
                activePane: 'upsale',
                pic_product: product,
                data: {
                    code: 200,
                },
                fileList:[],

                itmpPageNum:0,
                stmpPageNum:0,
                etmpPageNum:0,
                itmpPageTotal:0,
                stmpPageTotal:0,
                etmpPageTotal:0,

                itmpPageNum2:0,
                stmpPageNum2:0,
                etmpPageNum2:0,
                itmpPageTotal2:0,
                stmpPageTotal2:0,
                etmpPageTotal2:0,

                iupsaleText:'',
                iupPageNum:1,
                iupPageTotal:5,
                iupPageSize:5,
                iupPages:2,
                allData1:[
                //     {
                //     id:130,remark:null,brand:"大朋",salesmodel:"DeePoon M2",productmodel:"DeePoon M2",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:140,remark:null,brand:"HTC",salesmodel:"HTC-VIVE",productmodel:"HTC-VIVE",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:143,remark:null,brand:"HTC1",salesmodel:"HTC-VIVE1",productmodel:"HTC-VIVE1",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:1402,remark:null,brand:"HTC2",salesmodel:"HTC-VIVE2",productmodel:"HTC-VIVE2",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:14033,remark:null,brand:"HTC3",salesmodel:"HTC-VIVE3",productmodel:"HTC-VIVE3",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:1408,remark:null,brand:"HTC4",salesmodel:"HTC-VIVE4",productmodel:"HTC-VIVE4",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // }
                ],
                /////////////////////
                supsaleText:'',
                supPageNum:1,
                supPageTotal:5,
                supPageSize:5,
                supPages:5,
                allData2:[
                //     {
                //     id:1,remark:"remark",brand:"HTC",salesmodel:"salesmodel1",productmodel:"productmodel1",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:2,remark:"remark",brand:"HTC1",salesmodel:"salesmodel2",productmodel:"productmodel2",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:3,remark:"remark",brand:"HTC",salesmodel:"salesmodel3",productmodel:"productmodel3",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:4,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel4",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:5,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel5",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:6,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel6",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // }
                ],
                /////////////////////
                eupsaleText:'',
                eupPageNum:1,
                eupPageTotal:5,
                eupPageSize:5,
                eupPages:5,
                allData3:[
                //     {
                //     id:1,name:"name1",brand:1,salesmodel:'name',productmodel:"name1",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:12,name:"name1",brand:1,salesmodel:'name',productmodel:"name2",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:122,name:"name1",brand:1,salesmodel:'name',productmodel:"name3",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:1222,name:"name1",brand:1,salesmodel:'name',productmodel:"name4",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:12222,name:"name1",brand:1,salesmodel:'name',productmodel:"name5",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:1212,name:"name1",brand:1,salesmodel:'name',productmodel:"name6",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // }
                ],
                /////////////////////

                ioffsaleText:'',
                ioffPageNum:1,
                ioffPageTotal:5,
                ioffPageSize:5,
                ioffPages:2,
                allData4:[
                //     {
                //     id:130,remark:null,brand:"大朋",salesmodel:"DeePoon M9",productmodel:"DeePoon M9",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:1420,remark:null,brand:"HTC",salesmodel:"HTC-VIVE",productmodel:"HTC1",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:1420,remark:null,brand:"HTC1",salesmodel:"HTC-VIVE1",productmodel:"HTC2",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:140,remark:null,brand:"HTC2",salesmodel:"HTC-VIVE2",productmodel:"HTC3",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:12240,remark:null,brand:"HTC3",salesmodel:"HTC-VIVE3",productmodel:"HTC4",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // },{ id:1340,remark:null,brand:"HTC4",salesmodel:"HTC-VIVE4",productmodel:"HTC5",
                //     screentype:"AMOLED",monocularresolution:"1280*1440",weight:"0.398",workingtemperature:"54.1",bluerayirradiance:"1.9",
                //     soundpressurelevel:"98.24",maximumoutputvoltage:"95.8",broadbandcharacteristicvoltageofearphone:"55.9",boundarywarning:"保持坐姿或固定状态下使用",
                //     radiationdisturbance:"链接到图片",electrostaticdischarge:"链接到图片",fieldangle:"96.0",refreshrate:"70.0",
                //     systemdelay:"19.0",trackingmode:"9轴",trackingrange:"固定",meanchangeofvisualacuity:"0.1",ssqmean:"110.0",cvsmean:"124.0",
                //     cpu:"2.1",memory:"3.0",batteryCapacity:"3000.0",picLocation:"http://img14.360buyimg.com/n5/jfs/t3868/15/943450328/28673/a07918ad/58633a3fNfda89e9c.jpg",
                //     hot:null,offsale:0
                // }
                ],
                /////////////////////
                soffsaleText:'',
                soffPageNum:1,
                soffPageTotal:5,
                soffPageSize:5,
                soffPages:5,
                allData5:[
                //     {
                //     id:1,remark:"remark",brand:"HTC",salesmodel:"salesmodel1",productmodel:"productmodel11",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:19,remark:"remark",brand:"HTC1",salesmodel:"salesmodel2",productmodel:"productmodel12",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:199,remark:"remark",brand:"HTC",salesmodel:"salesmodel3",productmodel:"productmodel13",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:1999,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel14",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:19999,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel15",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // },{
                //     id:199554,remark:"remark",brand:"HTC1",salesmodel:"salesmodel1",productmodel:"productmodel16",
                //     screentype:"screentype",monocularresolution:"monocaluarresolution",weight:1,workingtemperature:"workingtemperature",
                //     bluerayirradiance:"bluerayirradiance",soundpressurelevel:"soundpressurelevel",maximumoutputvoltage:"maximumoutputvoltage",
                //     broadbandcharacteristicvoltageofearphone:"bbcvop",boundarywarning:"bw",radiationdisturbance:"/static/img/img.jpg",
                //     electrostaticdischarge:"/static/img/img.jpg",fieldangle:"fieldangle",refreshrate:"rsr",systemdelay:"smy",trackingmode:"tm",
                //     trackingrange:"tr",meanchangeofvisualacuity:"mcova",ssqmean:"ssqmean",cvsmean:"cvsmean",picLocation:"/static/img/img.jpg",
                // }
                ],
                /////////////////////
                eoffsaleText:'',
                eoffPageNum:1,
                eoffPageTotal:5,
                eoffPageSize:5,
                eoffPages:5,
                allData6:[
                //     {
                //     id:1,name:"name1",brand:1,salesmodel:'name',productmodel:"name11",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:144,name:"name1",brand:1,salesmodel:'name',productmodel:"name12",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:1444,name:"name1",brand:1,salesmodel:'name',productmodel:"name13",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:1565,name:"name1",brand:1,salesmodel:'name',productmodel:"name14",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:1990,name:"name1",brand:1,salesmodel:'name',productmodel:"name15",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // },{id:19955,name:"name1",brand:1,salesmodel:'name',productmodel:"name16",picLocation:"./static/img/img.jpg",
                //     weight:1,workingtemperature:1,bluerayirradiance:1,broadbandcharacteristicvoltageofearphone:5555,
                //     boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",
                //     fieldangle:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1
                // }
                ],
                /////////////////////
                
                multiSelection1:[],
                tableData1:[],

                multiSelection2:[],
                tableData2:[],

                multiSelection3:[],
                tableData3:[],

                multiSelection4:[],
                tableData4:[],

                multiSelection5:[],
                tableData5:[],

                multiSelection6:[],
                tableData6:[],
            }
        },


        methods: {
            codeParsing(code) {
                var msg = (Title, Message) => {
                    this.$message({
                        title: Title,
                        message: Message,
                        type: 'error'
                    });
                };
                switch(code) {
                    case -1:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 201:
                        msg('输入域错误', '验证码错误');
                        break;
                    case 300:
                        msg('输入域错误', '邮箱或密码错误');
                        break;
                    case 301:
                        msg('权限问题', '用户已禁用，请联系管理员');
                        break;
                    case 302:
                        msg('权限问题', '用户未激活，请去邮箱激活用户');
                        break;
                    case 303:
                        msg('注册问题', '邮箱已占用，请更改邮箱');
                        break;
                    case 304:
                        msg('注册问题', '昵称已占用，请更改昵称');
                        break;
                    case 400:
                        msg('权限问题', '用户未登录，请重新登录');
                        break;
                    case 401:
                        msg('权限问题', '用户无权访问，请联系管理员');
                        break;
                    case 402:
                        msg('操作错误', '删除错误,请刷新重试');
                        break;
                    case 500:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 600:
                        msg('TIME_OUT', '访问超时，请检查网络连接');
                        break;
                    case 700:
                        msg('激活错误', '非法激活链接，请联系管理员');
                        break;
                    case 800:
                        msg('激活错误', '用户已被激活，请直接登录');
                        break;
                    default:
                        break;
                }
            },
            tabClick(val){
                var self= this;
                switch(val.index){
                    case "0":
                        self.getProducts1();
                        self.getProducts2();
                        self.getProducts3();
                        break;
                    case "1":
                        self.getProducts4();
                        self.getProducts5();
                        self.getProducts6();
                        break;
                    case "2":
                        //self.updateProduct();
                        break;
                    default:
                        break;
                }
            },

            handleSelectionChange1(val){
                var self=this;
                self.multiSelection1=val;
            },
            handleSelectionChange2(val){
                var self=this;
                self.multiSelection2=val;
            },
            handleSelectionChange3(val){
                var self=this;
                self.multiSelection3=val;
            },
            handleSelectionChange4(val){
                var self=this;
                self.multiSelection4=val;
            },
            handleSelectionChange5(val){
                var self=this;
                self.multiSelection5=val;
            },
            handleSelectionChange6(val){
                var self=this;
                self.multiSelection6=val;
            },

            //一体机-一键下架
            handleAllOffsale1(){
                var self=this;
                if(self.multiSelection1==""){
                    self.$message("请选择要下架的产品！");
                }else{
                    var offsale=self.allData1.filter(t => self.multiSelection1.some(s => s.id === t.id))
                    // self.tableData1=self.tableData1.filter(t => !self.multiSelection1.some(s => s.id === t.id))
                    self.allData1=self.allData1.filter(t => !self.multiSelection1.some(s => s.id === t.id))
                    self.getPartProducts1(self.itmpPageNum);
                    //返回当前tableData给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/AllInOnePCoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                    //还要加到下架产品list里面去
                    for(var i=0;i<offsale.length;i++)
                        self.allData4.push(offsale[i]);
                }
                console.log("change: "+self.multiSelection1);
                // self.multiSection1=[];
            },
            //一体机-一键删除
            handleAllDelete1(){
                var self=this;
                if(self.multiSelection1==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var offsale=self.allData1.filter(t => self.multiSelection1.some(s => s.id === t.id))
                    self.allData1=self.allData1.filter(t => !self.multiSelection1.some(s => s.id === t.id));
                    console.log(self.allData1);
                    self.getPartProducts1(self.itmpPageNum);
                    //返回当前tableData1给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deleteAllInOnePC',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection1);
            },
            handleToOffsale1(index){
                var self=this;
                var offsale=[self.tableData1[index]];
                console.log(offsale);
                // self.tableData1.splice(index,1);
                // self.allData1.splice((self.itmpPageNum-1)*self.iupPageSize+index,1);
                self.allData1=self.allData1.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts1(self.itmpPageNum);
                self.allData4.push(offsale[0]);
                //返回当前tableData1给后端
                    // var saleID=[];
                    // for(var i=0;i<offsale.length;i++){
                    //     saleID.push(offsale[i].id);
                    // }
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/AllInOnePCoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete1(index){
                var self=this;
                // self.tableData1.splice(index,1);
                var offsale=[self.tableData1[index]];
                console.log(offsale);
                // self.tableData1.splice(index,1);
                // self.allData1.splice((self.itmpPageNum-1)*self.iupPageSize+index,1);
                self.allData1=self.allData1.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts1(self.itmpPageNum);
                //返回当前tableData1给后端
                var postData=[];
                for(var i=0;i<offsale.length;i++){
                    postData.push(offsale[i].id);
                }
                self.$axios({
                        url: '/admin/deleteAllInOnePC',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            //一体机-一键上架
            handleAllUpsale1(){
                var self=this;
                if(self.multiSelection4==""){
                    self.$message("请选择要上架的产品！");
                }else{
                    var upsale=self.allData4.filter(t => self.multiSelection4.some(s => s.id === t.id))
                    console.log(upsale);
                    // self.tableData1=self.tableData1.filter(t => !self.multiSelection1.some(s => s.id === t.id))
                    self.allData4=self.allData4.filter(t => !self.multiSelection4.some(s => s.id === t.id))
                    self.getPartProducts4(self.itmpPageNum2);
                    //返回当前tableData4给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/AllInOnePConSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                    //还要加到下架产品list里面去
                    for(var i=0;i<upsale.length;i++)
                        self.allData1.push(upsale[i]);
                }
                console.log("change: "+self.multiSelection4);
                // self.multiSection1=[];
            },
            //一体机-一键删除
            handleAllDelete4(){
                var self=this;
                if(self.multiSelection4==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var upsale=self.allData4.filter(t => self.multiSelection4.some(s => s.id === t.id))
                    self.allData4=self.allData4.filter(t => !self.multiSelection4.some(s => s.id === t.id))
                    self.getPartProducts4(self.itmpPageNum2);
                    //返回当前tableData4给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deleteAllInOnePC',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection4);
            },
            handleToUpsale1(index){
                var self=this;
                var upsale=[self.tableData4[index]];
                console.log(upsale);
                self.allData4=self.allData4.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts4(self.itmpPageNum2);
                self.allData1.push(upsale[0]);
                //返回当前tableData4给后端
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                console.log(postData);
                self.$axios({
                        url: '/admin/AllInOnePConSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete4(index){
                var self=this;
                var upsale=[self.tableData4[index]];
                console.log(upsale);
                self.allData4=self.allData4.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts4(self.itmpPageNum2);
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                self.$axios({
                        url: '/admin/deleteAllInOnePC',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },

            ///////////////////////////////////////
            //PC头显-一键下架
            handleAllOffsale2(){
                var self=this;
                if(self.multiSelection2==""){
                    self.$message("请选择要下架的产品！");
                }else{
                    var offsale=self.allData2.filter(t => self.multiSelection2.some(s => s.id === t.id))
                    // self.tableData1=self.tableData1.filter(t => !self.multiSelection1.some(s => s.id === t.id))
                    self.allData2=self.allData2.filter(t => !self.multiSelection2.some(s => s.id === t.id))
                    self.getPartProducts2(self.stmpPageNum);
                    //返回当前tableData给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/PCHeadSetoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });    
                    //还要加到下架产品list里面去
                    for(var i=0;i<offsale.length;i++)
                        self.allData5.push(offsale[i]);
                }
                console.log("change: "+self.multiSelection2);
                
            },
            //PC头显-一键删除
            handleAllDelete2(){
                var self=this;
                if(self.multiSelection2==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var offsale=self.allData2.filter(t => self.multiSelection2.some(s => s.id === t.id))
                    self.allData2=self.allData2.filter(t => !self.multiSelection2.some(s => s.id === t.id))
                    self.getPartProducts2(self.stmpPageNum);
                    //返回当前tableData2给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deletePCHeadSet',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection2);
            },
            handleToOffsale2(index){
                var self=this;
                var offsale=[self.tableData2[index]];
                console.log(offsale);
                // self.tableData2.splice(index,1);
                self.allData2=self.allData2.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts2(self.stmpPageNum);
                self.allData5.push(offsale[0]);
                //返回当前tableData2给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/PCHeadSetoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete2(index){
                var self=this;
                var offsale=[self.tableData2[index]];
                console.log(offsale);
                // self.tableData2.splice(index,1);
                self.allData2=self.allData2.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts2(self.stmpPageNum);
                //返回当前tableData2给后端
                var postData=[];
                for(var i=0;i<offsale.length;i++){
                    postData.push(offsale[i].id);
                }
                self.$axios({
                        url: '/admin/deletePCHeadSet',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            //PC头显-一键上架
            handleAllUpsale2(){
                var self=this;
                if(self.multiSelection5==""){
                    self.$message("请选择要上架的产品！");
                }else{
                    var upsale=self.allData5.filter(t => self.multiSelection5.some(s => s.id === t.id))
                    // self.tableData1=self.tableData1.filter(t => !self.multiSelection1.some(s => s.id === t.id))
                    self.allData5=self.allData5.filter(t => !self.multiSelection5.some(s => s.id === t.id))
                    self.getPartProducts5(self.stmpPageNum2);
                    //返回当前tableData给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/PCHeadSetonSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                    //还要加到下架产品list里面去
                    for(var i=0;i<upsale.length;i++)
                        self.allData2.push(upsale[i]);
                }
                console.log("change: "+self.multiSelection5);
                
            },
            //PC头显-一键删除
            handleAllDelete5(){
                var self=this;
                if(self.multiSelection5==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var upsale=self.allData5.filter(t => self.multiSelection5.some(s => s.id === t.id))
                    self.allData5=self.allData5.filter(t => !self.multiSelection5.some(s => s.id === t.id))
                    self.getPartProducts5(self.stmpPageNum2);
                    //返回当前tableData5给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deletePCHeadSet',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection5);
            },
            handleToUpsale2(index){
                var self=this;
                var upsale=[self.tableData5[index]];
                console.log(upsale);
                self.allData5=self.allData5.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts5(self.stmpPageNum2);
                self.allData2.push(upsale[0]);
                //返回当前tableData5给后端
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                console.log(postData);
                self.$axios({
                        url: '/admin/PCHeadSetonSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete5(index){
                var self=this;
                var upsale=[self.tableData5[index]];
                console.log(upsale);
                self.allData5=self.allData5.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts5(self.stmpPageNum2);
                //返回当前tableData5给后端
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                self.$axios({
                        url: '/admin/deletePCHeadSet',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },


            ///////////////////////////////
            //手机盒子-一键下架
            handleAllOffsale3(){
                var self=this;
                if(self.multiSelection3==""){
                    self.$message("请选择要下架的产品！");
                }else{
                    var offsale=self.allData3.filter(t => self.multiSelection3.some(s => s.id === t.id))
                    self.allData3=self.allData3.filter(t => !self.multiSelection3.some(s => s.id === t.id))
                    self.getPartProducts3(self.etmpPageNum);
                    //返回当前tableData3给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/MobileBoxoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });    
                    //还要加到下架产品list里面去
                    for(var i=0;i<offsale.length;i++)
                        self.allData6.push(offsale[i]);
                }
                console.log("change: "+self.multiSelection3);
            },
            //手机盒子-一键删除
            handleAllDelete3(){
                var self=this;
                if(self.multiSelection3==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var offsale=self.allData3.filter(t => self.multiSelection3.some(s => s.id === t.id))
                    self.allData3=self.allData3.filter(t => !self.multiSelection3.some(s => s.id === t.id))
                    self.getPartProducts3(self.etmpPageNum);
                    //返回当前tableData3给后端
                    var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deleteMobileBox',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection3);
            },
            handleToOffsale3(index){
                var self=this;
                var offsale=[self.tableData3[index]];
                console.log(offsale);
                self.allData3=self.allData3.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts3(self.etmpPageNum);
                self.allData6.push(offsale[0]);
                //返回当前tableData3给后端
                var postData=[];
                    for(var i=0;i<offsale.length;i++){
                        postData.push(offsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/MobileBoxoffSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功下架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete3(index){
                var self=this;
                var offsale=[self.tableData3[index]];
                console.log(offsale);
                self.allData3=self.allData3.filter(t => !offsale.some(s => s.id === t.id))
                self.getPartProducts3(self.etmpPageNum);
                //返回当前tableData3给后端
                var postData=[];
                for(var i=0;i<offsale.length;i++){
                    postData.push(offsale[i].id);
                }
                self.$axios({
                        url: '/admin/deleteMobileBox',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            //手机盒子-一键上架
            handleAllUpsale3(){
                var self=this;
                if(self.multiSelection6==""){
                    self.$message("请选择要上架的产品！");
                }else{
                    var upsale=self.allData6.filter(t => self.multiSelection6.some(s => s.id === t.id))
                    self.allData6=self.allData6.filter(t => !self.multiSelection6.some(s => s.id === t.id))
                    self.getPartProducts6(self.etmpPageNum2);
                    //返回当前tableData6给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    console.log(postData);
                    self.$axios({
                        url: '/admin/MobileBoxonSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                    //还要加到下架产品list里面去
                    for(var i=0;i<upsale.length;i++)
                        self.allData3.push(upsale[i]);
                }
                console.log("change: "+self.multiSelection6);
            },
            //手机盒子-一键删除
            handleAllDelete6(){
                var self=this;
                if(self.multiSelection6==""){
                    self.$message("请选择要删除的产品！");
                }else{
                    var upsale=self.allData6.filter(t => self.multiSelection6.some(s => s.id === t.id))
                    self.allData6=self.allData6.filter(t => !self.multiSelection6.some(s => s.id === t.id))
                    self.getPartProducts6(self.etmpPageNum2);
                    //返回当前tableData6给后端
                    var postData=[];
                    for(var i=0;i<upsale.length;i++){
                        postData.push(upsale[i].id);
                    }
                    self.$axios({
                        url: '/admin/deleteMobileBox',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
                }
                console.log("change: "+self.multiSelection6);
            },
            handleToUpsale3(index){
                var self=this;
                var upsale=[self.tableData6[index]];
                console.log(upsale);
                self.allData6=self.allData6.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts6(self.etmpPageNum2);
                self.allData3.push(offsale[0]);
                //返回当前tableData6给后端
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                console.log(postData);
                self.$axios({
                        url: '/admin/MobileBoxonSale',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功上架！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },
            handleDelete6(index){
                var self=this;
                var upsale=[self.tableData6[index]];
                console.log(upsale);
                self.allData6=self.allData6.filter(t => !upsale.some(s => s.id === t.id))
                self.getPartProducts6(self.etmpPageNum2);
                //返回当前tableData6给后端
                var postData=[];
                for(var i=0;i<upsale.length;i++){
                    postData.push(upsale[i].id);
                }
                self.$axios({
                        url: '/admin/deleteMobileBox',
                        //url: 'admin/getAllInOnePCAll?condition=0',
                        method: 'post',
                        baseURL: self.hostUrl,
                        data:postData
                    }).then((response)=> {
                        self.data.code = response.data.code;
                        if (self.data.code == 200){
                            self.$message("产品已被成功删除！")
                        }else{
                            self.codeParsing(self.data.code);
                        }
                    }).catch((error)=> {
                        console.log(error);
                    });
            },

            /////////////////////////////
            //获取当前页的产品信息
            getPartProducts1(page){
                console.log("page: "+page);
                var self=this;
                self.itmpPageNum=page;
                self.tableData1=[];
                self.iupPageTotal=self.allData1.length;
                if(self.iupPageTotal!=0){
                    self.iupPages=Math.ceil(self.iupPageTotal/self.iupPageSize);
                    var size=(page==self.iupPages)?(self.iupPageTotal%self.iupPageSize==0?self.iupPageSize:self.iupPageTotal%self.iupPageSize):self.iupPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData1.push(self.allData1[(page-1)*self.iupPageSize+i]);
                    }
                    console.log("succ");
                }
            },
            getPartProducts2(page){
                console.log("page: "+page);
                var self=this;
                self.stmpPageNum=page;
                self.tableData2=[];
                self.supPageTotal=self.allData2.length;
                if(self.supPageTotal!=0){
                    self.supPages=Math.ceil(self.supPageTotal/self.supPageSize);
                    var size=(page==self.supPages)?(self.supPageTotal%self.supPageSize==0?self.supPageSize:self.supPageTotal%self.supPageSize):self.supPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData2.push(self.allData2[(page-1)*self.supPageSize+i]);
                    }
                }
            },
            getPartProducts3(page){
                console.log("page: "+page);
                var self=this;
                self.etmpPageNum=page;
                self.tableData3=[];
                self.eupPageTotal=self.allData3.length;
                if(self.eupPageTotal!=0){
                    self.eupPages=Math.ceil(self.eupPageTotal/self.eupPageSize);
                    var size=(page==self.eupPages)?(self.eupPageTotal%self.eupPageSize==0?self.eupPageSize:self.eupPageTotal%self.eupPageSize):self.eupPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData3.push(self.allData3[(page-1)*self.eupPageSize+i]);
                    }
                }
            },
            getPartProducts4(page){
                console.log("page: "+page);
                var self=this;
                self.itmpPageNum2=page;
                self.tableData4=[];
                self.ioffPageTotal=self.allData4.length;
                if(self.ioffPageTotal!=0){
                    self.ioffPages=Math.ceil(self.ioffPageTotal/self.ioffPageSize);
                    var size=(page==self.ioffPages)?(self.ioffPageTotal%self.ioffPageSize==0?self.ioffPageSize:self.ioffPageTotal%self.ioffPageSize):self.ioffPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData4.push(self.allData4[(page-1)*self.ioffPageSize+i]);
                    }
                }
            },
            getPartProducts5(page){
                console.log("page: "+page);
                var self=this;
                self.stmpPageNum2=page;
                self.tableData5=[];
                self.soffPageTotal=self.allData5.length;
                if(self.soffPageTotal){
                    self.soffPages=Math.ceil(self.soffPageTotal/self.soffPageSize);
                    var size=(page==self.soffPages)?(self.soffPageTotal%self.soffPageSize==0?self.soffPageSize:self.soffPageTotal%self.soffPageSize):self.soffPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData5.push(self.allData5[(page-1)*self.soffPageSize+i]);
                    }
                }
            },
            getPartProducts6(page){
                console.log("page: "+page);
                var self=this;
                self.etmpPageNum2=page;
                self.tableData6=[];
                self.eoffPageTotal=self.allData6.length;
                if(self.eoffPageTotal){
                    self.eoffPages=Math.ceil(self.eoffPageTotal/self.eoffPageSize);
                    var size=(page==self.eoffPages)?(self.eoffPageTotal%self.eoffPageSize==0?self.eoffPageSize:self.eoffPageTotal%self.eoffPageSize):self.eoffPageSize;
                    console.log("size: "+size);
                    for(var i=0;i<size;i++){
                        self.tableData6.push(self.allData6[(page-1)*self.eoffPageSize+i]);
                    }
                }
            },
            /////////////////////////////
            //更换页码
            handleIUpsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.iupPageNum);
                self.getPartProducts1(self.iupPageNum);
            },
            handleSUpsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.supPageNum);
                self.getPartProducts2(self.supPageNum);
            },
            handleEUpsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.eupPageNum);
                self.getPartProducts3(self.eupPageNum);
            },
            handleIOffsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.ioffPageNum);
                self.getPartProducts4(self.ioffPageNum);
            },
            handleSOffsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.soffPageNum);
                self.getPartProducts5(self.soffPageNum);
            },
            handleEOffsaleChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.eoffPageNum);
                self.getPartProducts6(self.eoffPageNum);
            },

            /////////////////////////////
            //获取所有一体机产品信息
            getProducts1(){
                var self = this;
                //测试用数据
                self.getPartProducts1(1);
                self.$axios({
                    url: 'admin/getAllInOnePCAll?condition=onsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData1=response.data.object.allInOnePC;
                        self.getPartProducts1(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            //获取所有PC头显产品信息
            getProducts2(){
                var self = this;
                //测试用数据
                self.getPartProducts2(1);
                self.$axios({
                    url: 'admin/getPCHeadSetAll?condition=onsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData2=response.data.object.PCHeadSet;
                        self.getPartProducts2(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            //获取所有手机盒子产品信息
            getProducts3(){
                var self = this;
                //测试用数据
                self.getPartProducts3(1);
                self.$axios({
                    url: 'admin/getMobileBoxAll?condition=onsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData3=response.data.object.MobileBox;
                        self.getPartProducts3(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            //////////下架产品/////////////
            //获取所有一体机产品信息
            getProducts4(){
                var self = this;
                //测试用数据
                self.getPartProducts4(1);
                self.$axios({
                    url: 'admin/getAllInOnePCAll?condition=offsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData4=response.data.object.allInOnePC;
                        self.getPartProducts4(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            //获取所有PC头显产品信息
            getProducts5(){
                var self = this;
                //测试用数据
                self.getPartProducts5(1);
                self.$axios({
                    url: 'admin/getPCHeadSetAll?condition=offsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData5=response.data.object.PCHeadSet;
                        self.getPartProducts5(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            //获取所有手机盒子产品信息
            getProducts6(){
                var self = this;
                //测试用数据
                self.getPartProducts6(1);
                self.$axios({
                    url: 'admin/getMobileBoxAll?condition=offsale',
                    //url: 'admin/getAllInOnePCAll?condition=0',
                    method: 'get',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data.code = response.data.code;
                    if (self.data.code == 200){
                        self.allData6=response.data.object.MobileBox;
                        self.getPartProducts6(1);
                    }else{
                        self.codeParsing(self.data.code);
                    }
                }).catch((error)=> {
                    console.log(error);
                });
            },
            /////////////////////////////
            //进行产品搜索
            handleIUpsaleSearch(){
                var self=this;
                console.log(self.iupsaleText);
                var text=self.iupsaleText.trim();
                if(text!=""){
                    self.tableData1=[];
                    for(var i=0;i<self.allData1.length;i++){
                        if(self.allData1[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData1.push(self.allData1[i]);
                        }
                    }
                    self.iupPageTotal=self.tableData1.length;
                    self.iupPages=Math.ceil(self.iupPageTotal/self.iupPageSize);
                }else{
                    self.iupPageTotal=self.itmpPageTotal;
                    self.iupPages=Math.ceil(self.iupPageTotal/self.iupPageSize);
                    self.getPartProducts1(self.itmpPageNum);
                }
            },
            handleSUpsaleSearch(){
                var self=this;
                console.log(self.supsaleText);
                var text=self.supsaleText.trim();
                if(text!=""){
                    self.tableData2=[];
                    for(var i=0;i<self.allData2.length;i++){
                        if(self.allData2[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData2.push(self.allData2[i]);
                        }
                    }
                    self.supPageTotal=self.tableData2.length;
                    self.supPages=Math.ceil(self.supPageTotal/self.supPageSize);
                }else{
                    self.supPageTotal=self.stmpPageTotal;
                    self.supPages=Math.ceil(self.supPageTotal/self.supPageSize);
                    self.getPartProducts2(self.stmpPageNum);
                }
            },
            handleEUpsaleSearch(){
                var self=this;
                console.log(self.eupsaleText);
                var text=self.eupsaleText.trim();
                if(text!=""){
                    self.tableData3=[];
                    for(var i=0;i<self.allData3.length;i++){
                        if(self.allData3[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData3.push(self.allData3[i]);
                        }
                    }
                    self.eupPageTotal=self.tableData3.length;
                    self.eupPages=Math.ceil(self.eupPageTotal/self.supPageSize);
                }else{
                    self.eupPageTotal=self.etmpPageTotal;
                    self.eupPages=Math.ceil(self.eupPageTotal/self.eupPageSize);
                    self.getPartProducts3(self.etmpPageNum);
                }
            },
            //////////下架产品搜索////////////////
            handleIOffsaleSearch(){
                var self=this;
                console.log(self.ioffsaleText);
                var text=self.ioffsaleText.trim();
                if(text!=""){
                    self.tableData4=[];
                    for(var i=0;i<self.allData4.length;i++){
                        if(self.allData4[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData4.push(self.allData4[i]);
                        }
                    }
                    self.ioffPageTotal=self.tableData4.length;
                    self.ioffPages=Math.ceil(self.ioffPageTotal/self.ioffPageSize);
                }else{
                    self.ioffPageTotal=self.itmpPageTotal2;
                    self.ioffPages=Math.ceil(self.ioffPageTotal/self.ioffPageSize);
                    self.getPartProducts4(self.itmpPageNum2);
                }
            },
            handleSOffsaleSearch(){
                var self=this;
                console.log(self.soffsaleText);
                var text=self.soffsaleText.trim();
                if(text!=""){
                    self.tableData5=[];
                    for(var i=0;i<self.allData5.length;i++){
                        if(self.allData5[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData5.push(self.allData5[i]);
                        }
                    }
                    self.soffPageTotal=self.tableData5.length;
                    self.soffPages=Math.ceil(self.soffPageTotal/self.soffPageSize);
                }else{
                    self.soffPageTotal=self.stmpPageTotal2;
                    self.soffPages=Math.ceil(self.soffPageTotal/self.soffPageSize);
                    self.getPartProducts5(self.stmpPageNum2);
                }
            },
            handleEOffsaleSearch(){
                var self=this;
                console.log(self.eoffsaleText);
                var text=self.eoffsaleText.trim();
                if(text!=""){
                    self.tableData6=[];
                    for(var i=0;i<self.allData6.length;i++){
                        if(self.allData6[i].productmodel.toLowerCase().indexOf(text)!=-1){
                            self.tableData6.push(self.allData6[i]);
                        }
                    }
                    self.eoffPageTotal=self.tableData6.length;
                    self.eoffPages=Math.ceil(self.eoffPageTotal/self.soffPageSize);
                }else{
                    self.eoffPageTotal=self.etmpPageTotal2;
                    self.eoffPages=Math.ceil(self.eoffPageTotal/self.eoffPageSize);
                    self.getPartProducts6(self.etmpPageNum2);
                }
            },

            ////////////////////////
            //上传产品信息到服务器
            submitUpload(){
                var self=this;
                // console.log("refs:"+self.$refs);
                console.log("fileList length:"+self.fileList.length);
                console.log(self.fileList);
                if(self.fileList.length==1){
                    self.$refs.upload.submit();
                    self.$message("上传成功！");
                }else if(self.fileList.length>1){
                    self.$message("只能上传一个文件！");
                }else if(self.fileList.length==0){
                    self.$message("您尚未上传文件");
                }
            },

            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },

            uploadProduct(){
                var self = this;
                // console.log("upload product!!!!!!!!!!!!!!1")
                self.$axios({
                    url: 'updateProduct/check',
                    method: 'post',
                    baseURL: self.hostUrl,
                }).then((response)=> {
                    self.data = response.data;
                    if (self.data.code == 200)
                        msg('上传成功');
                    else
                        msg('上传失败');
                }).catch((error)=> {
                    console.log(error);
                });
            },
        },

        mounted(){
            var self = this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            // self.getPartProducts1(self.itmpPageNum);
            //self.get
        },
        created(){
            var self=this;
            self.getProducts1();
            self.getProducts2();
            self.getProducts3();
            self.getProducts4();
            self.getProducts5();
            self.getProducts6();
        }
    }

</script>


<style>
    .content {
        float: left;
        width: 70%;
    }
    .search-input{
        width:200px;
        margin-left:10px;
    }
    .table-title{
        font-size:20px;
        color:#324157;
        font-weight:bold;
        margin:10px;
    }
    .operation{
        margin:0 0 10px 10px;
    }

    .upload {
        position: relative;
        margin-left: 350px;
        margin-top: 60px;
        margin-bottom: 55px;

    }

    .model-img {
        width: 35px;
        height: 35px;

    }

    .btn {
        position: absolute;
    }
    .upload-demo{
        margin-left:10px;
    }
</style>