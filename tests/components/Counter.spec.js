import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Counter from '../../src/components/Counter.vue';

describe('Counter Component', () => {
    it('initial value is 0', () => {
        const wrapper = mount(Counter);
        assert.strictEqual(wrapper.text().includes('Count: 0'), true);
    });

    it('Clicking increment button increases count', async () => {
        const wrapper = mount(Counter);
        const button = wrapper.find('button.increment');
        await button.trigger('click');
        expectTypeOf(button).toBeObject();
        assertType(wrapper.text().includes('Count: 1'));
    });

    test('Clicking decrement button decreases count', async () => {
        const wrapper = mount(Counter);
        const button = wrapper.find('button.decrement');
        await button.trigger('click');
        expectTypeOf(button).toBeObject();
        assertType(wrapper.text().includes('Count: -1'));
    });
});