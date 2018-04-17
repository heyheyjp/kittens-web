/**
 * USE WITH CAUTION. Unsafe copy of https://github.com/coopermaruyama/react-web3.
 * Includes a fix for the csae where web3 has not been already injected.
 * For some strange reason, the code for the beta version available on npm
 * isn't available in the github repo, so importing from a fork in github
 * wasn't really an option.
 */

module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__,
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      })
      /******/
    }
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 2))
  /******/
})(
  /************************************************************************/
  /******/ [
    // eslint-disable-line no-unexpected-multiline
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require('react')

      /***/
    },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
      var React = __webpack_require__(0)
      var IconNoWeb3 = __webpack_require__(8)
      var stylesheet = __webpack_require__(9)

      function ErrorTemplate(props) {
        return React.createElement(
          'div',
          {className: 'Web3Provider-container'},
          React.createElement('style', {
            dangerouslySetInnerHTML: {__html: stylesheet},
          }),
          React.createElement(
            'div',
            {className: 'Web3Provider-wrapper'},
            React.createElement(
              'div',
              {className: 'Web3Provider-image'},
              React.createElement(IconNoWeb3, null),
            ),
            React.createElement('h1', {
              className: 'Web3Provider-title',
              dangerouslySetInnerHTML: {__html: props.title},
            }),
            React.createElement('p', {
              className: 'Web3Provider-message',
              dangerouslySetInnerHTML: {__html: props.message},
            }),
          ),
        )
      }

      module.exports = ErrorTemplate

      /***/
    },
    /* 2 */
    /***/ function(module, exports, __webpack_require__) {
      var Web3Provider = __webpack_require__(3)
      var ErrorTemplate = __webpack_require__(1)

      module.exports.Web3Provider = Web3Provider
      module.exports.ErrorTemplate = ErrorTemplate

      module.exports = {
        Web3Provider: Web3Provider,
        ErrorTemplate: ErrorTemplate,
      }

      /***/
    },
    /* 3 */
    /***/ function(module, exports, __webpack_require__) {
      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps)
          if (staticProps) defineProperties(Constructor, staticProps)
          return Constructor
        }
      })()

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function')
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof superClass,
          )
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {value: subClass, enumerable: false, writable: true, configurable: true},
        })
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass)
      }

      var React = __webpack_require__(0)
      var PropTypes = __webpack_require__(4)
      var isEmpty = __webpack_require__(5)
      var range = __webpack_require__(6)
      var AccountUnavailable = __webpack_require__(7)
      var Web3Unavailable = __webpack_require__(10)

      var ONE_SECOND = 1000
      var ONE_MINUTE = ONE_SECOND * 60
      var propTypes = {
        web3UnavailableScreen: PropTypes.any,
        accountUnavailableScreen: PropTypes.any,
        onChangeAccount: PropTypes.func,
      }
      var defaultProps = {
        passive: false,
        web3UnavailableScreen: Web3Unavailable,
        accountUnavailableScreen: AccountUnavailable,
      }
      var childContextTypes = {
        web3: PropTypes.shape({
          accounts: PropTypes.array,
          selectedAccount: PropTypes.string,
          network: PropTypes.string,
          networkId: PropTypes.string,
        }),
      }

      var Web3Provider = (function(_React$Component) {
        _inherits(Web3Provider, _React$Component)

        function Web3Provider(props, context) {
          _classCallCheck(this, Web3Provider)

          var _this = _possibleConstructorReturn(
            this,
            (Web3Provider.__proto__ || Object.getPrototypeOf(Web3Provider)).call(
              this,
              props,
              context,
            ),
          )

          var accounts = _this.getAccounts()

          _this.state = {
            accounts: accounts,
            networkId: null,
            networkError: null,
          }
          _this.interval = null
          _this.networkInterval = null
          _this.fetchAccounts = _this.fetchAccounts.bind(_this)
          _this.fetchNetwork = _this.fetchNetwork.bind(_this)

          if (accounts) {
            _this.handleAccounts(accounts, true)
          }
          return _this
        }

        _createClass(Web3Provider, [
          {
            key: 'getChildContext',
            value: function getChildContext() {
              return {
                web3: {
                  accounts: this.state.accounts,
                  selectedAccount: this.state.accounts && this.state.accounts[0],
                  network: getNetwork(this.state.networkId),
                  networkId: this.state.networkId,
                },
              }
            },

            /**
             * Start polling accounts, & network. We poll indefinitely so that we can
             * react to the user changing accounts or netowrks.
             */
          },
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              this.fetchAccounts()
              this.fetchNetwork()
              this.initPoll()
              this.initNetworkPoll()
            },

            /**
             * Init web3/account polling, and prevent duplicate interval.
             * @return {void}
             */
          },
          {
            key: 'initPoll',
            value: function initPoll() {
              if (!this.interval) {
                this.interval = setInterval(this.fetchAccounts, ONE_SECOND)
              }
            },

            /**
             * Init network polling, and prevent duplicate intervals.
             * @return {void}
             */
          },
          {
            key: 'initNetworkPoll',
            value: function initNetworkPoll() {
              if (!this.networkInterval) {
                this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE)
              }
            },

            /**
             * Update state regarding the availability of web3 and an ETH account.
             * @return {void}
             */
          },
          {
            key: 'fetchAccounts',
            value: function fetchAccounts() {
              var _this2 = this

              var _window = window,
                web3 = _window.web3

              var ethAccounts = this.getAccounts()

              if (isEmpty(ethAccounts)) {
                web3 &&
                  web3.eth &&
                  web3.eth.getAccounts(function(err, accounts) {
                    if (err) {
                      _this2.setState({
                        accountsError: err,
                      })
                    } else {
                      _this2.handleAccounts(accounts)
                    }
                  })
              } else {
                this.handleAccounts(ethAccounts)
              }
            },
          },
          {
            key: 'handleAccounts',
            value: function handleAccounts(accounts) {
              var isConstructor =
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
              var onChangeAccount = this.props.onChangeAccount
              var store = this.context.store

              var next = accounts[0]
              var curr = this.state.accounts[0]
              next = next && next.toLowerCase()
              curr = curr && curr.toLowerCase()
              var didChange = curr && next && curr !== next

              if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
                this.setState({
                  accountsError: null,
                  accounts: accounts,
                })
              }

              if (didChange && !isConstructor) {
                this.setState({
                  accountsError: null,
                  accounts: accounts,
                })
              }

              // If provided, execute callback
              if (didChange && typeof onChangeAccount === 'function') {
                onChangeAccount(next)
              }

              // If available, dispatch redux action
              if (store && typeof store.dispatch === 'function') {
                var didDefine = !curr && next

                if (didDefine || (isConstructor && next)) {
                  // eslint-disable-line no-mixed-operators
                  store.dispatch({
                    type: 'web3/RECEIVE_ACCOUNT',
                    address: next,
                  })
                } else if (didChange) {
                  store.dispatch({
                    type: 'web3/CHANGE_ACCOUNT',
                    address: next,
                  })
                }
              }
            },

            /**
             * Get the network and update state accordingly.
             * @return {void}
             */
          },
          {
            key: 'fetchNetwork',
            value: function fetchNetwork() {
              var _this3 = this

              var _window2 = window,
                web3 = _window2.web3

              if (web3) {
                var isV1 = /^1/.test(web3.version)
                var _getNetwork = isV1 ? web3.eth.net.getId : web3.version.getNetwork

                _getNetwork(function(err, netId) {
                  if (err) {
                    _this3.setState({
                      networkError: err,
                    })
                  } else {
                    if (String(netId) !== String(_this3.state.networkId)) {
                      _this3.setState({
                        networkError: null,
                        networkId: netId,
                      })
                    }
                  }
                })
              }
            },

            /**
             * Get the account. We wrap in try/catch because reading `web3.eth.accounts`
             * will throw if no account is selected.
             * @return {String}
             */
          },
          {
            key: 'getAccounts',
            value: function getAccounts() {
              var _window3 = window,
                web3 = _window3.web3

              try {
                var isV1 = /^1/.test(web3.version)
                var _window4 = window,
                  _web = _window4.web3
                // throws if no account selected

                var getV1Wallets = function getV1Wallets() {
                  return range(_web.eth.accounts.wallet.length)
                    .map(function(i) {
                      return _web.eth.accounts.wallet[i]
                    })
                    .map(function(w) {
                      return w.address
                    })
                }
                var accounts = isV1 ? getV1Wallets() : _web.eth.accounts

                return accounts
              } catch (e) {
                return []
              }
            },
          },
          {
            key: 'render',
            value: function render() {
              var _window5 = window,
                web3 = _window5.web3
              var _props = this.props,
                passive = _props.passive,
                Web3UnavailableComponent = _props.web3UnavailableScreen,
                AccountUnavailableComponent = _props.accountUnavailableScreen

              if (passive) {
                return this.props.children
              }

              if (!web3) {
                return React.createElement(Web3UnavailableComponent, null)
              }

              if (isEmpty(this.state.accounts)) {
                return React.createElement(AccountUnavailableComponent, null)
              }

              return this.props.children
            },
          },
        ])

        return Web3Provider
      })(React.Component)

      Web3Provider.contextTypes = {
        store: PropTypes.object,
      }

      Web3Provider.propTypes = propTypes
      Web3Provider.defaultProps = defaultProps
      Web3Provider.childContextTypes = childContextTypes

      module.exports = Web3Provider

      /* =============================================================================
=    Deps
============================================================================= */
      function getNetwork(networkId) {
        switch (String(networkId)) {
          case '1':
            return 'MAINNET'
          case '2':
            return 'MORDEN'
          case '3':
            return 'ROPSTEN'
          default:
            return 'UNKNOWN'
        }
      }

      /***/
    },
    /* 4 */
    /***/ function(module, exports) {
      module.exports = require('prop-types')

      /***/
    },
    /* 5 */
    /***/ function(module, exports) {
      module.exports = require('lodash/isEmpty')

      /***/
    },
    /* 6 */
    /***/ function(module, exports) {
      module.exports = require('lodash/range')

      /***/
    },
    /* 7 */
    /***/ function(module, exports, __webpack_require__) {
      var React = __webpack_require__(0) // eslint-disable-line no-unused-vars
      var ErrorTemplate = __webpack_require__(1)

      var AccountUnavailable = ErrorTemplate.bind(null, {
        title: 'No ETH Account Available',
        message:
          '\nIt seems that you don&apos;t have an ETH account selected. If using\nMetaMask, please make sure that your wallet is unlocked and that\nyou have at least one account in your accounts list.',
      })

      module.exports = AccountUnavailable

      /***/
    },
    /* 8 */
    /***/ function(module, exports, __webpack_require__) {
      var _react = __webpack_require__(0)

      var _react2 = _interopRequireDefault(_react)

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {default: obj}
      }

      function IconNoWeb3(props) {
        return _react2.default.createElement(
          'svg',
          {
            width: '100%',
            height: '100%',
            viewBox: '0 0 332 417',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            xmlnsXlink: 'http://www.w3.org/1999/xlink',
          },
          _react2.default.createElement(
            'defs',
            null,
            _react2.default.createElement('path', {
              d:
                'M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z',
              id: 'path-1',
            }),
          ),
          _react2.default.createElement(
            'g',
            {id: 'Page-1', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd'},
            _react2.default.createElement(
              'g',
              {id: 'Group', transform: 'translate(-33.000000, 0.000000)'},
              _react2.default.createElement(
                'g',
                {
                  id: 'Ethereum_logo_2014',
                  opacity: '0.208899457',
                  transform: 'translate(71.000000, 0.000000)',
                  fillRule: 'nonzero',
                },
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#343434',
                  points:
                    '127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32',
                }),
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#8C8C8C',
                  points: '127.962 0 0 212.32 127.962 287.959 127.962 154.158',
                }),
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#3C3C3B',
                  points:
                    '127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866',
                }),
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#8C8C8C',
                  points: '127.962 416.9052 127.962 312.1852 0 236.5852',
                }),
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#141414',
                  points: '127.9611 287.9577 255.9211 212.3207 127.9611 154.1587',
                }),
                _react2.default.createElement('polygon', {
                  id: 'Shape',
                  fill: '#393939',
                  points: '0.0009 212.3208 127.9609 287.9578 127.9609 154.1588',
                }),
              ),
              _react2.default.createElement('g', {
                id: 'ic_do_not_disturb',
                transform: 'translate(0.000000, 10.000000)',
              }),
              _react2.default.createElement('polygon', {
                id: 'Bounds',
                points: '0 10 397.221369 10 397.221369 407.221369 0 407.221369',
              }),
              _react2.default.createElement(
                'g',
                {id: 'Icon'},
                _react2.default.createElement('use', {
                  fill: '#FFE1DE',
                  fillRule: 'evenodd',
                  xlinkHref: '#path-1',
                }),
                _react2.default.createElement('path', {
                  stroke: '#FFFFFF',
                  strokeWidth: '6',
                  d:
                    'M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z',
                }),
              ),
            ),
          ),
        )
      }

      module.exports = IconNoWeb3

      /***/
    },
    /* 9 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports =
        '\n.Web3Provider-container {\n  font-family: Helvetica, Arial;\n  color: hsl(0,0%,50%);\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: hsl(0, 0%, 95%);\n  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n}\n.Web3Provider-wrapper {\n  width: 400px;\n  border: 1px solid hsl(207, 90%, 54%);\n  border-radius: 20px;\n  text-align: center;\n  padding: 50px 40px;\n  margin: 80px auto;\n}\n.Web3Provider-image {\n  max-height: 175px;\n}\n.Web3Provider-title {\n  margin-top: 50px;\n  color: hsl(0,0%,25%);\n}\n.Web3Provider-message {\n  line-height: 27px;\n  font-size: 18px;\n  color: hsl(0,0%,50%);\n}\n'

      /***/
    },
    /* 10 */
    /***/ function(module, exports, __webpack_require__) {
      var React = __webpack_require__(0) // eslint-disable-line no-unused-vars
      var ErrorTemplate = __webpack_require__(1)

      var Web3Unavailable = ErrorTemplate.bind(null, {
        title: 'Web3 Not Found',
        message:
          '\nIt seems that you are using a browser without Web3 capabilities. Please\nmake sure that you are using a web3-capable browser like mist or parity.\nIf you are using MetaMask or Parity extension, make sure that it is\nenabled.\n',
      })

      module.exports = Web3Unavailable

      /***/
    },
    /******/
  ],
)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjFjNWQ1NzAxNGZhMjJlNWJiOGUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9XZWIzUHJvdmlkZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9yYW5nZVwiIiwid2VicGFjazovLy8uL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9JY29uTm9XZWIzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1VuYXZhaWxhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJY29uTm9XZWIzIiwic3R5bGVzaGVldCIsIkVycm9yVGVtcGxhdGUiLCJwcm9wcyIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJXZWIzUHJvdmlkZXIiLCJQcm9wVHlwZXMiLCJpc0VtcHR5IiwicmFuZ2UiLCJBY2NvdW50VW5hdmFpbGFibGUiLCJXZWIzVW5hdmFpbGFibGUiLCJPTkVfU0VDT05EIiwiT05FX01JTlVURSIsInByb3BUeXBlcyIsIndlYjNVbmF2YWlsYWJsZVNjcmVlbiIsImFueSIsImFjY291bnRVbmF2YWlsYWJsZVNjcmVlbiIsIm9uQ2hhbmdlQWNjb3VudCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJ3ZWIzIiwic2hhcGUiLCJhY2NvdW50cyIsImFycmF5Iiwic2VsZWN0ZWRBY2NvdW50Iiwic3RyaW5nIiwibmV0d29yayIsIm5ldHdvcmtJZCIsImNvbnRleHQiLCJnZXRBY2NvdW50cyIsInN0YXRlIiwibmV0d29ya0Vycm9yIiwiaW50ZXJ2YWwiLCJuZXR3b3JrSW50ZXJ2YWwiLCJmZXRjaEFjY291bnRzIiwiYmluZCIsImZldGNoTmV0d29yayIsImhhbmRsZUFjY291bnRzIiwiZ2V0TmV0d29yayIsImluaXRQb2xsIiwiaW5pdE5ldHdvcmtQb2xsIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJldGhBY2NvdW50cyIsImV0aCIsImVyciIsInNldFN0YXRlIiwiYWNjb3VudHNFcnJvciIsImlzQ29uc3RydWN0b3IiLCJzdG9yZSIsIm5leHQiLCJjdXJyIiwidG9Mb3dlckNhc2UiLCJkaWRDaGFuZ2UiLCJkaXNwYXRjaCIsImRpZERlZmluZSIsInR5cGUiLCJhZGRyZXNzIiwiaXNWMSIsInRlc3QiLCJ2ZXJzaW9uIiwibmV0IiwiZ2V0SWQiLCJuZXRJZCIsImdldFYxV2FsbGV0cyIsIndhbGxldCIsImxlbmd0aCIsIm1hcCIsImkiLCJ3IiwiZSIsIldlYjNVbmF2YWlsYWJsZUNvbXBvbmVudCIsIkFjY291bnRVbmF2YWlsYWJsZUNvbXBvbmVudCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7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QUNBQSxJQUFNVixRQUFRLG1CQUFBQyxDQUFRLENBQVIsQ0FBZDtBQUNBLElBQU1HLGdCQUFnQixtQkFBQUgsQ0FBUSxDQUFSLENBQXRCOztBQUVBLElBQU1lLGtCQUFrQlosY0FBY3VDLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDL0NwQyxTQUFPLGdCQUR3QztBQUUvQ0M7QUFGK0MsQ0FBekIsQ0FBeEI7O0FBVUFDLE9BQU9DLE9BQVAsR0FBaUJNLGVBQWpCLEMiLCJmaWxlIjoiLi9kaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjFjNWQ1NzAxNGZhMjJlNWJiOGUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSWNvbk5vV2ViMyA9IHJlcXVpcmUoJy4vSWNvbk5vV2ViMycpO1xuY29uc3Qgc3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vc3R5bGVzaGVldCcpO1xuXG5mdW5jdGlvbiBFcnJvclRlbXBsYXRlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItY29udGFpbmVyXCI+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1pbWFnZVwiPlxuICAgICAgICAgIDxJY29uTm9XZWIzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItdGl0bGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMudGl0bGUgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItbWVzc2FnZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5tZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVGVtcGxhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJjb25zdCBXZWIzUHJvdmlkZXIgPSByZXF1aXJlKCcuL1dlYjNQcm92aWRlcicpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cy5XZWIzUHJvdmlkZXIgPSBXZWIzUHJvdmlkZXI7XG5tb2R1bGUuZXhwb3J0cy5FcnJvclRlbXBsYXRlID0gRXJyb3JUZW1wbGF0ZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYjNQcm92aWRlcixcbiAgRXJyb3JUZW1wbGF0ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbmNvbnN0IGlzRW1wdHkgPSByZXF1aXJlKCdsb2Rhc2gvaXNFbXB0eScpO1xuY29uc3QgcmFuZ2UgPSByZXF1aXJlKCdsb2Rhc2gvcmFuZ2UnKTtcbmNvbnN0IEFjY291bnRVbmF2YWlsYWJsZSA9IHJlcXVpcmUoJy4vQWNjb3VudFVuYXZhaWxhYmxlJyk7XG5jb25zdCBXZWIzVW5hdmFpbGFibGUgPSByZXF1aXJlKCcuL1dlYjNVbmF2YWlsYWJsZScpO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IE9ORV9NSU5VVEUgPSBPTkVfU0VDT05EICogNjA7XG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogUHJvcFR5cGVzLmFueSxcbiAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBQcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZUFjY291bnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiBmYWxzZSxcbiAgd2ViM1VuYXZhaWxhYmxlU2NyZWVuOiBXZWIzVW5hdmFpbGFibGUsXG4gIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogQWNjb3VudFVuYXZhaWxhYmxlXG59O1xuY29uc3QgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHdlYjM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RlZEFjY291bnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV0d29yazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXR3b3JrSWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn07XG5cbmNsYXNzIFdlYjNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGNvbnN0IGFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnRzLFxuICAgICAgbmV0d29ya0lkOiBudWxsLFxuICAgICAgbmV0d29ya0Vycm9yOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLm5ldHdvcmtJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5mZXRjaEFjY291bnRzID0gdGhpcy5mZXRjaEFjY291bnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaE5ldHdvcmsgPSB0aGlzLmZldGNoTmV0d29yay5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKGFjY291bnRzKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjY291bnRzKGFjY291bnRzLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYjM6IHtcbiAgICAgICAgYWNjb3VudHM6IHRoaXMuc3RhdGUuYWNjb3VudHMsXG4gICAgICAgIHNlbGVjdGVkQWNjb3VudDogdGhpcy5zdGF0ZS5hY2NvdW50cyAmJiB0aGlzLnN0YXRlLmFjY291bnRzWzBdLFxuICAgICAgICBuZXR3b3JrOiBnZXROZXR3b3JrKHRoaXMuc3RhdGUubmV0d29ya0lkKSxcbiAgICAgICAgbmV0d29ya0lkOiB0aGlzLnN0YXRlLm5ldHdvcmtJZFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgcG9sbGluZyBhY2NvdW50cywgJiBuZXR3b3JrLiBXZSBwb2xsIGluZGVmaW5pdGVseSBzbyB0aGF0IHdlIGNhblxuICAgKiByZWFjdCB0byB0aGUgdXNlciBjaGFuZ2luZyBhY2NvdW50cyBvciBuZXRvd3Jrcy5cbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hBY2NvdW50cygpO1xuICAgIHRoaXMuZmV0Y2hOZXR3b3JrKCk7XG4gICAgdGhpcy5pbml0UG9sbCgpO1xuICAgIHRoaXMuaW5pdE5ldHdvcmtQb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCB3ZWIzL2FjY291bnQgcG9sbGluZywgYW5kIHByZXZlbnQgZHVwbGljYXRlIGludGVydmFsLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdFBvbGwoKSB7XG4gICAgaWYgKCF0aGlzLmludGVydmFsKSB7XG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaEFjY291bnRzLCBPTkVfU0VDT05EKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBuZXR3b3JrIHBvbGxpbmcsIGFuZCBwcmV2ZW50IGR1cGxpY2F0ZSBpbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0TmV0d29ya1BvbGwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldHdvcmtJbnRlcnZhbCkge1xuICAgICAgdGhpcy5uZXR3b3JrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmZldGNoTmV0d29yaywgT05FX01JTlVURSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdGF0ZSByZWdhcmRpbmcgdGhlIGF2YWlsYWJpbGl0eSBvZiB3ZWIzIGFuZCBhbiBFVEggYWNjb3VudC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoQWNjb3VudHMoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgY29uc3QgZXRoQWNjb3VudHMgPSB0aGlzLmdldEFjY291bnRzKCk7XG5cbiAgICBpZiAoaXNFbXB0eShldGhBY2NvdW50cykpIHtcbiAgICAgIHdlYjMgJiYgd2ViMy5ldGggJiYgd2ViMy5ldGguZ2V0QWNjb3VudHMoKGVyciwgYWNjb3VudHMpID0+IHtcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY2NvdW50c0Vycm9yOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUFjY291bnRzKGFjY291bnRzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoZXRoQWNjb3VudHMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFjY291bnRzKGFjY291bnRzLCBpc0NvbnN0cnVjdG9yID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlQWNjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IG5leHQgPSBhY2NvdW50c1swXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuc3RhdGUuYWNjb3VudHNbMF07XG4gICAgbmV4dCA9IG5leHQgJiYgbmV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGN1cnIgPSBjdXJyICYmIGN1cnIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBkaWRDaGFuZ2UgPSBjdXJyICYmIG5leHQgJiYgKGN1cnIgIT09IG5leHQpO1xuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykgJiYgIWlzRW1wdHkoYWNjb3VudHMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHM6IGFjY291bnRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGlkQ2hhbmdlICYmICFpc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIHByb3ZpZGVkLCBleGVjdXRlIGNhbGxiYWNrXG4gICAgaWYgKGRpZENoYW5nZSAmJiB0eXBlb2Ygb25DaGFuZ2VBY2NvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNoYW5nZUFjY291bnQobmV4dCk7XG4gICAgfVxuXG4gICAgLy8gSWYgYXZhaWxhYmxlLCBkaXNwYXRjaCByZWR1eCBhY3Rpb25cbiAgICBpZiAoc3RvcmUgJiYgdHlwZW9mIHN0b3JlLmRpc3BhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaWREZWZpbmUgPSAhY3VyciAmJiBuZXh0O1xuXG4gICAgICBpZiAoZGlkRGVmaW5lIHx8IChpc0NvbnN0cnVjdG9yICYmIG5leHQpKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9SRUNFSVZFX0FDQ09VTlQnLFxuICAgICAgICAgIGFkZHJlc3M6IG5leHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGRpZENoYW5nZSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3dlYjMvQ0hBTkdFX0FDQ09VTlQnLFxuICAgICAgICAgIGFkZHJlc3M6IG5leHRcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXR3b3JrIGFuZCB1cGRhdGUgc3RhdGUgYWNjb3JkaW5nbHkuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmZXRjaE5ldHdvcmsoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAod2ViMykge1xuICAgICAgY29uc3QgaXNWMSA9IC9eMS8udGVzdCh3ZWIzLnZlcnNpb24pO1xuICAgICAgY29uc3QgZ2V0TmV0d29yayA9IGlzVjEgPyB3ZWIzLmV0aC5uZXQuZ2V0SWQgOiB3ZWIzLnZlcnNpb24uZ2V0TmV0d29yaztcblxuICAgICAgZ2V0TmV0d29yaygoZXJyLCBuZXRJZCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXRJZCAhPSB0aGlzLnN0YXRlLm5ldHdvcmtJZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcbiAgICAgICAgICAgICAgbmV0d29ya0lkOiBuZXRJZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWNjb3VudC4gV2Ugd3JhcCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSByZWFkaW5nIGB3ZWIzLmV0aC5hY2NvdW5yc2BcbiAgICogd2lsbCB0aHJvdyBpZiBubyBhY2NvdW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRBY2NvdW50cygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICBjb25zdCBpc1YxID0gL14xLy50ZXN0KHdlYjMudmVyc2lvbik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgICAvLyB0aHJvd3MgaWYgbm8gYWNjb3VudCBzZWxlY3RlZFxuICAgICAgY29uc3QgZ2V0VjFXYWxsZXRzID0gKCkgPT4gcmFuZ2Uod2ViMy5ldGguYWNjb3VudHMud2FsbGV0Lmxlbmd0aCkubWFwKGkgPT4gd2ViMy5ldGguYWNjb3VudHMud2FsbGV0W2ldKS5tYXAodyA9PiB3LmFkZHJlc3MpO1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBpc1YxID8gZ2V0VjFXYWxsZXRzKCkgOiB3ZWIzLmV0aC5hY2NvdW50cztcblxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZSxcbiAgICAgIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgICAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZiAoIXdlYjMpIHtcbiAgICAgIHJldHVybiA8V2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50IC8+O1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5KHRoaXMuc3RhdGUuYWNjb3VudHMpKSB7XG4gICAgICByZXR1cm4gPEFjY291bnRVbmF2YWlsYWJsZUNvbXBvbmVudCAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5XZWIzUHJvdmlkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuV2ViM1Byb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbldlYjNQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNQcm92aWRlcjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgRGVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmZ1bmN0aW9uIGdldE5ldHdvcmsobmV0d29ya0lkKSB7XG4gIHN3aXRjaCAobmV0d29ya0lkKSB7XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4gJ01BSU5ORVQnO1xuICAgIGNhc2UgJzInOlxuICAgICAgcmV0dXJuICdNT1JERU4nO1xuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuICdST1BTVEVOJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdVTktOT1dOJztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYjNQcm92aWRlci5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicHJvcC10eXBlc1wiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9pc0VtcHR5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvcmFuZ2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvcmFuZ2VcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbmNvbnN0IEFjY291bnRVbmF2YWlsYWJsZSA9IEVycm9yVGVtcGxhdGUuYmluZChudWxsLCB7XG4gIHRpdGxlOiAnTm8gRVRIIEFjY291bnQgQXZhaWxhYmxlJyxcbiAgbWVzc2FnZTogYFxuSXQgc2VlbXMgdGhhdCB5b3UgZG9uJmFwb3M7dCBoYXZlIGFuIEVUSCBhY2NvdW50IHNlbGVjdGVkLiBJZiB1c2luZ1xuTWV0YU1hc2ssIHBsZWFzZSBtYWtlIHN1cmUgdGhhdCB5b3VyIHdhbGxldCBpcyB1bmxvY2tlZCBhbmQgdGhhdFxueW91IGhhdmUgYXQgbGVhc3Qgb25lIGFjY291bnQgaW4geW91ciBhY2NvdW50cyBsaXN0LmBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY291bnRVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSWNvbk5vV2ViMyhwcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAzMzIgNDE3XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDxkZWZzPlxuICAgICAgPHBhdGggZD1cIk0xOTguNjEwNjg1LDQzLjEwMTc4MDggQzEwNy4yNDk3Nyw0My4xMDE3ODA4IDMzLjEwMTc4MDgsMTE3LjI0OTc3IDMzLjEwMTc4MDgsMjA4LjYxMDY4NSBDMzMuMTAxNzgwOCwyOTkuOTcxNTk5IDEwNy4yNDk3NywzNzQuMTE5NTg4IDE5OC42MTA2ODUsMzc0LjExOTU4OCBDMjg5Ljk3MTU5OSwzNzQuMTE5NTg4IDM2NC4xMTk1ODgsMjk5Ljk3MTU5OSAzNjQuMTE5NTg4LDIwOC42MTA2ODUgQzM2NC4xMTk1ODgsMTE3LjI0OTc3IDI4OS45NzE1OTksNDMuMTAxNzgwOCAxOTguNjEwNjg1LDQzLjEwMTc4MDggTDE5OC42MTA2ODUsNDMuMTAxNzgwOCBaIE0xOTguNjEwNjg1LDM0MS4wMTc4MDggQzEyNS40NTU3NDksMzQxLjAxNzgwOCA2Ni4yMDM1NjE1LDI4MS43NjU2MiA2Ni4yMDM1NjE1LDIwOC42MTA2ODUgQzY2LjIwMzU2MTUsMTc3Ljk5MTUzNyA3Ni42MzA2MjI1LDE0OS44NTUwMjQgOTQuMTc0NTY2MywxMjcuNTExMzIyIEwyNzkuNzEwMDQ3LDMxMy4wNDY4MDMgQzI1Ny4zNjYzNDUsMzMwLjU5MDc0NyAyMjkuMjI5ODMyLDM0MS4wMTc4MDggMTk4LjYxMDY4NSwzNDEuMDE3ODA4IEwxOTguNjEwNjg1LDM0MS4wMTc4MDggWiBNMzAzLjA0NjgwMywyODkuNzEwMDQ3IEwxMTcuNTExMzIyLDEwNC4xNzQ1NjYgQzEzOS44NTUwMjQsODYuNjMwNjIyNSAxNjcuOTkxNTM3LDc2LjIwMzU2MTUgMTk4LjYxMDY4NSw3Ni4yMDM1NjE1IEMyNzEuNzY1NjIsNzYuMjAzNTYxNSAzMzEuMDE3ODA4LDEzNS40NTU3NDkgMzMxLjAxNzgwOCwyMDguNjEwNjg1IEMzMzEuMDE3ODA4LDIzOS4yMjk4MzIgMzIwLjU5MDc0NywyNjcuMzY2MzQ1IDMwMy4wNDY4MDMsMjg5LjcxMDA0NyBMMzAzLjA0NjgwMywyODkuNzEwMDQ3IFpcIiBpZD1cInBhdGgtMVwiPjwvcGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgIDxnIGlkPVwiR3JvdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzLjAwMDAwMCwgMC4wMDAwMDApXCI+XG4gICAgICAgIDxnIGlkPVwiRXRoZXJldW1fbG9nb18yMDE0XCIgb3BhY2l0eT1cIjAuMjA4ODk5NDU3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcxLjAwMDAwMCwgMC4wMDAwMDApXCIgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMzQzNDM0XCIgcG9pbnRzPVwiMTI3Ljk2MTEgMCAxMjUuMTY2MSA5LjUgMTI1LjE2NjEgMjg1LjE2OCAxMjcuOTYxMSAyODcuOTU4IDI1NS45MjMxIDIxMi4zMlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDAgMCAyMTIuMzIgMTI3Ljk2MiAyODcuOTU5IDEyNy45NjIgMTU0LjE1OFwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzQzNDM0JcIiBwb2ludHM9XCIxMjcuOTYxMSAzMTIuMTg2NiAxMjYuMzg2MSAzMTQuMTA2NiAxMjYuMzg2MSA0MTIuMzA1NiAxMjcuOTYxMSA0MTYuOTA2NiAyNTUuOTk5MSAyMzYuNTg2NlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDQxNi45MDUyIDEyNy45NjIgMzEyLjE4NTIgMCAyMzYuNTg1MlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMxNDE0MTRcIiBwb2ludHM9XCIxMjcuOTYxMSAyODcuOTU3NyAyNTUuOTIxMSAyMTIuMzIwNyAxMjcuOTYxMSAxNTQuMTU4N1wiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzOTM5MzlcIiBwb2ludHM9XCIwLjAwMDkgMjEyLjMyMDggMTI3Ljk2MDkgMjg3Ljk1NzggMTI3Ljk2MDkgMTU0LjE1ODhcIj48L3BvbHlnb24+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJpY19kb19ub3RfZGlzdHVyYlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAuMDAwMDAwKVwiPjwvZz5cbiAgICAgICAgPHBvbHlnb24gaWQ9XCJCb3VuZHNcIiBwb2ludHM9XCIwIDEwIDM5Ny4yMjEzNjkgMTAgMzk3LjIyMTM2OSA0MDcuMjIxMzY5IDAgNDA3LjIyMTM2OVwiPjwvcG9seWdvbj5cbiAgICAgICAgPGcgaWQ9XCJJY29uXCI+XG4gICAgICAgICAgPHVzZSBmaWxsPVwiI0ZGRTFERVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlV2lkdGg9XCI2XCIgZD1cIk0xOTguNjEwNjg1LDQ2LjEwMTc4MDggQzI4OC4zMTQ3NDUsNDYuMTAxNzgwOCAzNjEuMTE5NTg4LDExOC45MDY2MjQgMzYxLjExOTU4OCwyMDguNjEwNjg1IEMzNjEuMTE5NTg4LDI5OC4zMTQ3NDUgMjg4LjMxNDc0NSwzNzEuMTE5NTg4IDE5OC42MTA2ODUsMzcxLjExOTU4OCBDMTA4LjkwNjYyNCwzNzEuMTE5NTg4IDM2LjEwMTc4MDgsMjk4LjMxNDc0NSAzNi4xMDE3ODA4LDIwOC42MTA2ODUgQzM2LjEwMTc4MDgsMTE4LjkwNjYyNCAxMDguOTA2NjI0LDQ2LjEwMTc4MDggMTk4LjYxMDY4NSw0Ni4xMDE3ODA4IFogTTE5OC42MTA2ODUsMzQ0LjAxNzgwOCBDMTIzLjc5ODg5NSwzNDQuMDE3ODA4IDYzLjIwMzU2MTUsMjgzLjQyMjQ3NCA2My4yMDM1NjE1LDIwOC42MTA2ODUgQzYzLjIwMzU2MTUsMTc4LjA3NzQ0MiA3My4zNzM2NzE0LDE0OS4xNDUyMzMgOTEuODE1MDA0OSwxMjUuNjU4NjI5IEw5My45MDQwMDA3LDEyMi45OTgxMTUgTDI4NC4yMjMyNTQsMzEzLjMxNzM2OCBMMjgxLjU2Mjc0LDMxNS40MDYzNjQgQzI1OC4wNzYxMzYsMzMzLjg0NzY5OCAyMjkuMTQzOTI3LDM0NC4wMTc4MDggMTk4LjYxMDY4NSwzNDQuMDE3ODA4IFogTTMwMy4zMTczNjgsMjk0LjIyMzI1NCBMMTEyLjk5ODExNSwxMDMuOTA0MDAxIEwxMTUuNjU4NjI5LDEwMS44MTUwMDUgQzEzOS4xNDUyMzMsODMuMzczNjcxNCAxNjguMDc3NDQyLDczLjIwMzU2MTUgMTk4LjYxMDY4NSw3My4yMDM1NjE1IEMyNzMuNDIyNDc0LDczLjIwMzU2MTUgMzM0LjAxNzgwOCwxMzMuNzk4ODk1IDMzNC4wMTc4MDgsMjA4LjYxMDY4NSBDMzM0LjAxNzgwOCwyMzkuMTQzOTI3IDMyMy44NDc2OTgsMjY4LjA3NjEzNiAzMDUuNDA2MzY0LDI5MS41NjI3NCBMMzAzLjMxNzM2OCwyOTQuMjIzMjU0IFpcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25Ob1dlYjM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IGBcbi5XZWIzUHJvdmlkZXItY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGNvbG9yOiBoc2woMCwwJSw1MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NSUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG59XG4uV2ViM1Byb3ZpZGVyLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDkwJSwgNTQlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDQwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvO1xufVxuLldlYjNQcm92aWRlci1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xufVxuLldlYjNQcm92aWRlci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiBoc2woMCwwJSwyNSUpO1xufVxuLldlYjNQcm92aWRlci1tZXNzYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGhzbCgwLDAlLDUwJSk7XG59XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlc2hlZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbmNvbnN0IFdlYjNVbmF2YWlsYWJsZSA9IEVycm9yVGVtcGxhdGUuYmluZChudWxsLCB7XG4gIHRpdGxlOiAnV2ViMyBOb3QgRm91bmQnLFxuICBtZXNzYWdlOiBgXG5JdCBzZWVtcyB0aGF0IHlvdSBhcmUgdXNpbmcgYSBicm93c2VyIHdpdGhvdXQgV2ViMyBjYXBhYmlsaXRpZXMuIFBsZWFzZVxubWFrZSBzdXJlIHRoYXQgeW91IGFyZSB1c2luZyBhIHdlYjMtY2FwYWJsZSBicm93c2VyIGxpa2UgbWlzdCBvciBwYXJpdHkuXG5JZiB5b3UgYXJlIHVzaW5nIE1ldGFNYXNrIG9yIFBhcml0eSBleHRlbnNpb24sIG1ha2Ugc3VyZSB0aGF0IGl0IGlzXG5lbmFibGVkLlxuYFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViM1VuYXZhaWxhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYjNVbmF2YWlsYWJsZS5qc3giXSwic291cmNlUm9vdCI6IiJ9
