<template>
  <div>
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Data Table</div>
    </div>
    <!-- Data table-->
    <div id="datatable" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Data table</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/data-table-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label"></div>
            <div class="demo_content">
              <div class="border--bottom padding-whole clear box--greyed mobile-hidden">
                <form action="" class="grid-row">
                  <div class="col-sm-3">
                    <div class="form-search is-empty form-item--small">
                      <input type="search" placeholder="Search" value="" class="valid">
                      <button type="button" tabindex="-1" class="form-search__clear icon-clear"
                              style="display: none;">
                        <span class="aria--visible"></span>
                      </button>
                      <button class="form-search__submit" tabindex="-1">
                        <span class="icon-search"></span><span class="aria--visible"></span>
                      </button>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </form>
              </div>
              <!-- message info--->
              <div class="message message--info " data-module="message">
                <div class="message__inner">
                  <span class="message__icon icon icon-notification"></span>

                  <div class="text--small message__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <button class="message__close no-js--hidden" aria-hidden="true"><span
                    class="icon-remove"></span></button>
                </div>
              </div>
              <!-- message info-end--->
              <table class="table table--adv"
                     id="DataTables_Table_0" role="grid" style="display: table;">
                <thead>
                <tr role="row">
                  <th class="form-checkbox invoices__table__column--checkbox all form-checkbox--single sorting_disabled">
                    <!--<input type="checkbox" id="select-all-rows" value="all" data-component="checkbox"-->
                    <!--data-alias="selectAll">-->
                    <!--<label for="select-all-rows"></label>-->
                    <a class="form-checkbox--result" tabindex="1" href="#" role="link-hc" idx="4" data-state="some-selected"> <label>  </label> </a>
                  </th>
                  <th class="invoices__table__column min-createdDate-a sorting_desc">Issued</th>
                  <th class="invoices__table__column--description min-invoiceNumber-a sorting_asc">
                    Description
                  </th>
                  <th class="invoices__table__column all sorting">Status</th>
                  <th class="invoices__table__column min-dueDate-a sorting">Due date</th>
                  <th class="invoices__table__column all sorting">Amount</th>
                  <th class="invoices__table__column min-balanceAmount-a sorting">Balance</th>
                </tr>
                </thead>
                <tbody>
                <tr role="row" class="odd">
                  <td class="form-checkbox invoices__table__column--checkbox  form-checkbox--single ">
                    <input type="checkbox" id="check-02" name="invoices" value="6456456;343,43;Paid">
                    <label for="check-02"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1">2015.12.11</td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr role="row" class="even row-selected">
                  <td class=" form-checkbox form-checkbox--single invoices__table__column--checkbox">
                    <input type="checkbox" checked id="check-03" name="invoices"
                           value="6456456;343,43;Paid">
                    <label for="check-03"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1">row-selected</td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr role="row" class="odd row-selected row--error">
                  <td class=" form-checkbox form-checkbox--single invoices__table__column--checkbox">
                    <input type="checkbox" id="check-04" checked name="invoices"
                           value="6456456;343,43;Paid">
                    <label for="check-04"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1"><p>row-selected</p>

                    <p>row--error</p></td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr role="row" class="even row-selected row--disable">
                  <td class=" form-checkbox form-checkbox--single invoices__table__column--checkbox">
                    <input type="checkbox" id="check-05" name="invoices" value="6456456;343,43;Paid">
                    <label for="check-05"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1"><p>row-selected</p>

                    <P>row--disable</P></td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr role="row" class="odd">
                  <td class=" form-checkbox form-checkbox--single invoices__table__column--checkbox">
                    <input type="checkbox" id="check-06" name="invoices" value="6456456;343,43;Paid">
                    <label for="check-06"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1">2015.12.11</td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr role="row" class="even">
                  <td class=" form-checkbox form-checkbox--single invoices__table__column--checkbox">
                    <input type="checkbox" id="check-6456457" name="invoices" value="6456456;343,43;Paid">
                    <label for="check-6456457"></label>
                  </td>
                  <td class="min-createdDate-a sorting_1">2015.12.11</td>
                  <td class="  min-invoiceNumber-a">
                    <p>Credit note</p><span class="text-size--13"><a href="#">#6456456</a></span>
                  </td>
                  <td>Paid</td>
                  <td class="  min-dueDate-a">2015.12.11</td>
                  <td>547,81 kr.</td>
                  <td class="  min-balanceAmount-a"><span class="">343,43 kr.</span></td>
                </tr>
                <tr class="odd">
                  <td class="dataTables_empty" colspan="7">No matching records found</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- subscriptions table-->
    <div id="subscriptions-table" class="doc-compontent-box">
      <div class="sg-component">
        <div class="sg-component__header">
          <h2 class="title--medium-small trailer--small">Subscriptions table</h2>
        </div>
        <div class="sg-component__status">
          <p class="mobile-one-half mobile-pull-right mobile-text-right">
            <a class="pull-right" href="http://10.19.18.95:48888/examples/data-table-demo/index.html" target="_blank">View Demo</a>
          </p>
        </div>
        <div class="sg-component__markup">
          <div class="block">
            <div class="sg-component__label">Subscriptions table</div>
            <div class="demo_content">
              <div class="dataTables_wrapper">
                <table class="table table--adv table--without-hover table--zebra" role="grid">
                  <thead>
                  <tr role="row">
                    <th data-class="text--center table__expand-cell" data-type="expand"
                        data-data="FetchAccountsUrl" data-sortable="false" data-width="32px"
                        class="text--center table__expand-cell" rowspan="1" colspan="1" aria-label=""
                        style="width: 22px;"></th>
                    <th data-title="CVR" data-class="" class="column.HeaderClass all" data-data="Cvr"
                        data-responsive-width="0" data-sortable="true" tabindex="0"
                        aria-controls="b2b-customers-table" rowspan="1" colspan="1"
                        aria-label="CVR: activate to sort column ascending">CVR
                    </th>
                    <th data-title="KOB" data-class="" class="column.HeaderClass all" data-data="Kob"
                        data-responsive-width="0" data-sortable="true" tabindex="0"
                        aria-controls="b2b-customers-table" rowspan="1" colspan="1"
                        aria-label="KOB: activate to sort column ascending">KOB
                    </th>
                    <th data-title="ID" data-class="" class="column.HeaderClass all" data-data="Id"
                        data-responsive-width="0" data-sortable="true" tabindex="0"
                        aria-controls="b2b-customers-table" rowspan="1" colspan="1"
                        aria-label="ID: activate to sort column ascending">ID
                    </th>
                    <th data-title="Name" data-class="" class="column.HeaderClass all" data-data="Name"
                        data-responsive-width="0" data-sortable="true" tabindex="0"
                        aria-controls="b2b-customers-table" rowspan="1" colspan="1"
                        aria-label="Name: activate to sort column ascending">Name
                    </th>
                    <th data-title="PO" and="" city="" data-class="" class="column.HeaderClass all"
                        data-data="PoAndCity" data-responsive-width="0" data-sortable="true"
                        tabindex="0" aria-controls="b2b-customers-table" rowspan="1" colspan="1"
                        aria-label="PO: activate to sort column ascending">PO
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr role="row" class="odd expanded">
                    <td class="text--center table__expand-cell sorting_1"
                        data-prevented-row-selection="true">
                      <div class="th_bill_trigger table__expander">
                        <a class="icon-expand" href="#"></a>
                      </div>
                    </td>
                    <td>
                      <p>CVR_1</p>
                      <span class="text-size--13">60 50 12 15</span>
                    </td>
                    <td>KOB_1</td>
                    <td>111</td>
                    <td>Aller Media A/S</td>
                    <td>2100 Copenhagen NV</td>
                  </tr>
                  <tr id="data-table-loading-row-0" class="drop-row">
                    <td class="text--center drop-item" colspan="6">
                      <div class="drop-item-holder">
                        <div class="container data-table--without-pagination">
                          <div class="border--bottom clear padding-whole box--greyed header-grey">
                            <div class="grid-row">
                              <h2 class="col-md-6 text-size--19 text-light">Selected billing
                                account</h2>

                              <div class="col-md-6 text--right">
                                <div class="mobile-trailer--small display--inline-block mobile-display--block">
                                  <div class="form-search is-empty form-item--small"
                                       data-component="datatables/filters/search"
                                       data-extensions="form/search"
                                       data-search-on-change="true" data-group="filters"
                                       data-column="searchText">
                                    <input type="search" placeholder="Search"
                                           data-component="type-watch"
                                           data-capture-length="1" value="">

                                    <div class="js-hidden"><input
                                      id="SearchViewModel_CurrentModelId"
                                      name="SearchViewModel.CurrentModelId"
                                      type="hidden" value=""></div>
                                    <button type="button" tabindex="-1"
                                            class="form-search__clear icon-clear"
                                            data-list-clear="" style="display: none;">
                                      <span class="aria--visible"></span></button>
                                    <button id="search-field-one-button"
                                            class="form-search__submit" tabindex="-1">
                                      <span class="icon-search"></span><span
                                      class="aria--visible"></span></button>
                                  </div>
                                </div>
                                <button class="button button--default button--small stretch-mobile toleft--small mobile-toleft--none"
                                        type="button"><span
                                  class="button__text">Toggle all</span></button>
                              </div>
                            </div>
                          </div>
                          <div class="dataTables_wrapper no-footer">
                            <table class="table table--without-hover" role="grid">
                              <thead>
                              <tr role="row">
                                <th>Account</th>
                                <th>EAN</th>
                                <th>Acc.</th>
                                <th>Payer</th>
                                <th>Address</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr role="row" class="odd">
                                <td>123412341</td>
                                <td>55555551</td>
                                <td>Account-1</td>
                                <td>Payer of Account-1</td>
                                <td>324235345 Philadelfia</td>
                              </tr>
                              <tr role="row" class="even">
                                <td>123412342</td>
                                <td>55555552</td>
                                <td>Account-2</td>
                                <td>Payer of Account-2</td>
                                <td>324235345 Philadelfia</td>
                              </tr>
                              <tr role="row" class="odd">
                                <td>123412343</td>
                                <td>55555553</td>
                                <td>Account-3</td>
                                <td>Payer of Account-3</td>
                                <td>324235345 Philadelfia</td>
                              </tr>
                              <tr role="row" class="even">
                                <td>123412344</td>
                                <td>55555554</td>
                                <td>Account-4</td>
                                <td>Payer of Account-4</td>
                                <td>324235345 Philadelfia</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr role="row" class="even">
                    <td class="text--center table__expand-cell sorting_1"
                        data-prevented-row-selection="true">
                      <div class="th_bill_trigger table__expander">
                        <a class="icon-expand" href="#"></a>
                      </div>
                    </td>
                    <td><p>CVR_2</p>
                      <span class="text-size--13">60 50 12 15</span></td>
                    <td>KOB_2</td>
                    <td>222</td>
                    <td>Aller Media Aabenraa</td>
                    <td>6200 Aabenraa</td>
                  </tr>
                  <tr id="data-table-loading-row-2" class="drop-row js-hidden">
                    <td class="text--center drop-item" colspan="6">
                      <div class="drop-item-holder">
                      </div>
                    </td>
                  </tr>
                  <tr role="row" class="odd">
                    <td class="text--center table__expand-cell sorting_1"
                        data-prevented-row-selection="true">
                      <div class="th_bill_trigger table__expander">
                        <a class="icon-expand" href="#"></a>
                      </div>
                    </td>
                    <td><p>CVR_3</p>
                      <span class="text-size--13">60 50 12 15</span></td>
                    <td>KOB_3</td>
                    <td>333</td>
                    <td>Aller Media SB</td>
                    <td>8600 Silkeborg</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
