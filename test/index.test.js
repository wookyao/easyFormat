const expect = require('chai').expect
const fmt = require('../lib/easy_format.min');

describe('Testing easyFormat', () => {

  it('fmt.currency', () => {
    expect(fmt.currency(12000, true)).to.equal('12,000.00')
    expect(fmt.currency(0, false)).to.equal('')
    expect(fmt.currency(0, true)).to.equal('0.00')
  })

  it('fmt.time', () => {
    expect(fmt.time(new Date(2020,10,22), 'YYYY-MM-DD')).to.equal('2020-11-22')
    expect(fmt.time(new Date(2020,10,22, 10, 15, 2), 'YYYY-MM-DD hh:mm:ss')).to.equal('2020-11-22 10:15:02')
  })

  it('fmt.param', () => {
    let info = {
      orderId: 15,
      orderNo: 'Order20201022'
    }
    expect(fmt.param(info)).to.equal('?orderId=15&orderNo=Order20201022')
  })

  it('fmt.prefixZero', () => {
    expect(fmt.prefixZero(12, 5)).to.equal('00012')
    expect(fmt.prefixZero(12, 1)).to.equal('12')
    expect(fmt.prefixZero(-12, 3)).to.equal('-012')
    expect(fmt.prefixZero()).to.equal('0')
  })

  it('fmt.round', () => {
    expect(fmt.round(12.456, 2)).to.equal(12.46)
    expect(fmt.round(12, 2)).to.equal(12)
    expect(fmt.round(-12.234, 2)).to.equal(-12.23)
  })

  it('fmt.string', () => {
    expect(fmt.mask('15211112222', 12, 4)).to.equal('15211112222')
    expect(fmt.mask('15211112222', 3, 4)).to.equal('152****2222')
    expect(fmt.maskLeft('15211112222', 4)).to.equal('****1112222')
    expect(fmt.maskRight('15211112222', 4)).to.equal('1521111****')

    expect(fmt.trim(' 152  111 222 ', 'all')).to.equal('152111222')
    expect(fmt.trim(' 152  111 222 ', 'lr')).to.equal('152  111 222')
    expect(fmt.trim(' 152  111 222 1 ', 'lelf')).to.equal('152  111 222 1')
    expect(fmt.trim(' 152  111 222 ', 'right')).to.equal(' 152  111 222')
  })

  it('fmt.phone', () => {
    expect(fmt.phone('15256936283')).to.equal('152-5693-6283');
    expect(fmt.phone('15256936283', '/')).to.equal('152/5693/6283');
    expect(fmt.phone('15256936283','/','1/1/1')).to.equal('1-5-2-56936283');
  })

})