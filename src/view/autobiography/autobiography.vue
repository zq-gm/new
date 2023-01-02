<template>
  <div>
    <div>
      <el-steps align-center
       direction="vertical"
          :space="100">
        <el-step
          v-for="(item,index) in stepsData"
          :key="item.id">
          <template #description>
            <span @click="hangleDescription(item.id,index)">{{item.description}}</span>
          </template>
          <template #title>
            <span style="cursor:pointer;" @click="hangleStep(item.id,index)">
              {{item.title}}
            </span>
            <div v-if="item.id === clickIndex">
              <el-steps align-center
                direction="vertical"
                    :space="100">
              <el-step
                v-for="child in item.children"
                :key="child.id">
                <template #description>
                  <span @click="hangleDescription(child.id,index)">{{child.description}}</span>
                </template>
                <template #title>
                  <span style="cursor:pointer;" @click="hangleChildStep(child.id)">
                    {{child.title}}
                  </span>
                </template>
                </el-step>
              </el-steps>
            </div>
          </template>
          </el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
export default {
  name: 'expenses',
  components: {
  },
  data(){
    return {
      stepsData:[],
      clickIndex:-1, // 当前点击的一级时间轴
    }
  },
  mounted () {
    this.getStepsData()
  },
  methods: {
    getStepsData() {
      this.stepsData = []
      for(let i = 0; i<10;i++) {
        let obj = {
          id: i + 1,
          title:'这是标题' + (i+1),
          description:'这是详细信息'+ (i+1),
          date:'2021/10/10',
        }
        if (i%2 ===0) {
          let child = {
            id: i + 1,
            title:'这是子标题' + (i+1),
            description:'这是子信息'+ (i+1),
            date:'2021/10/10',
          }
          obj.children = [child]
        }
        this.stepsData.push(obj)
      }
    },
    hangleDescription (id) {
      console.log(id)
    },
    hangleStep (id) {
      console.log(id)
      if (this.clickIndex === id) {
        this.clickIndex =-1
      } else {
        this.clickIndex = id
      }
    },
    // 点击二级
    hangleChildStep(id){
      console.log(id)
    }
  }
}

</script>
